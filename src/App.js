import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import MdBack from 'react-icons/lib/md/keyboard-arrow-left';
import Name from './components/Name.js';
import SelectGender from './components/SelectGender.js';
import Description from './components/Description.js';
import Progress from './components/Progress.js';
import List from './components/List.js';
import Buttons from './components/Buttons.js';
import store from './store.js';
import { getNames, restart } from './actions/name-actions';


class App extends Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      originalNamesLength: (typeof localStorage["gender"] != "undefined") ? this.props.names.names[JSON.parse(localStorage.getItem('gender'))].length : 0,
      gender: (typeof localStorage["gender"] != "undefined") ? JSON.parse(localStorage.getItem('gender')) : null
    };

    // Bindings
    this.showName = this.showName.bind(this);
    this.showID = this.showID.bind(this);
    this.progress = this.progress.bind(this);
    this.isFinished = this.isFinished.bind(this);
    this.handleAllAcceptedNames = this.handleAllAcceptedNames.bind(this);
    this.isAlreadyAccepted = this.isAlreadyAccepted.bind(this);
    this.restart = this.restart.bind(this);
    this.selectGender = this.selectGender.bind(this);

    this.handleAllAcceptedNames();
    this.handleAllRejectedNames();
  }

  handleAllAcceptedNames() {
    if (this.props.names.accepted.length > 0) {
      this.props.names = this.props.names.filter((obj) => {
        return this.isAlreadyAccepted(obj.id);
      });
    }
  }

  isAlreadyAccepted(id) {
    let result = this.state.accepted.some((obj) => {
      return obj.id === id;
    });

    return !result;
  }

  handleAllRejectedNames() {
    if (this.props.names.rejected.length > 0) {
      this.state.names = this.state.names.filter((obj) => {
        return this.isAlreadyRejected(obj.id);
      });
    }
  }

  isAlreadyRejected(id) {
    let result = this.state.rejected.some((obj) => {
      return obj.id === id;
    });

    return !result;
  }

  progress() {
    return ((this.props.names.accepted.length + this.props.names.rejected.length) + 1) + "/" + (this.state.originalNamesLength + 1);
  }

  isFinished() {
    return (this.props.names.index + 1) > this.props.names.length
  }

  showID() {
    if (!this.isFinished()) {
      return this.props.names.names[this.state.gender][this.props.names.index].id
    } else {
      return "Onki navn eftir"
    }
  }

  showName() {
    if (!this.isFinished()) {
      return this.props.names.names[this.state.gender][this.props.names.index].name
    } else {
      return "Onki navn eftir"
    }
  }

  showDesc() {
    if (!this.isFinished()) {
      return this.props.names.names[this.state.gender][this.props.names.index].desc
    }
  }

  restart() {
    //this.setState({ names: _.shuffle(names) })
    this.setState({ accepted: [] })
    this.setState({ rejected: [] });
    restart();
    this.setState({ gender: null });
    localStorage.clear();

  }

  selectGender(e) {
    let gender = e.target.id;
    let namesList = this.props.names.names[gender];
    this.setState({ gender: gender });
    this.setState({ names: _.shuffle(namesList) });
    this.setState({ originalNamesLength: namesList.length });
    console.log(this.props.names); 
  }

  fixSelectGender() {
    if (this.state.gender) {
      let namesList = this.props.names.names[this.props.gender];
      this.setState({ originalNamesLength: namesList.length });
    }
  }

  render() {
    let display = null;
    if (this.state.gender == null) {
      display = <SelectGender selectGender={this.selectGender}></SelectGender>
    } else {
      display = <div>
        <div className="navbar">
          <a className="is-pulled-left" onClick={this.restart}><MdBack></MdBack> Byrja av nýggjum</a>
        </div>
        <section>
          <div className="section">
            
            <Name id={this.showID()} name={this.showName()}></Name>
            <Description id={this.showID()} desc={this.showDesc()}></Description>
            <br />
            <Progress progress={this.progress()}></Progress>
            <br />
            <Buttons isFinished={this.isFinished()}
              name={this.props.names.names[this.state.gender][this.props.names.index]}>
            </Buttons>

            <br />
            <br />
            <List></List>
          </div>
        </section>
      </div>;
    }

    return (
      <div className="App container">
        {display}
      </div>
    );
  }
}

const mapStateToProps = function(store) {
 
  return {
    names: store.names
  };
}

export default connect(mapStateToProps)(App);

