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
import { selectGender } from './actions/gender-actions';


class App extends Component {

  constructor(props) {
    super(props);
    
    // Bindings
    this.showName = this.showName.bind(this);
    this.showID = this.showID.bind(this);
    this.isFinished = this.isFinished.bind(this);
    this.restart = this.restart.bind(this);
  }

  isFinished() {
    return (this.props.names[this.props.gender.selected].index + 1) > this.props.names.length
  }

  showID() {
    if (!this.isFinished()) {
      return this.props.names[this.props.gender.selected][this.props.names.index].id
    } else {
      return "Onki navn eftir"
    }
  }

  showName() {
    if (!this.isFinished()) {
      return this.props.names[this.props.gender.selected][this.props.names.index].name
    } else {
      return "Onki navn eftir"
    }
  }

  showDesc() {
    if (!this.isFinished()) {
      return this.props.names[this.props.gender.selected][this.props.names.index].desc
    }
  }

  restart() {
    store.dispatch(restart());
    store.dispatch(selectGender(null));
    localStorage.clear();
  }

  fixSelectGender() {
    if (this.props.gender.selected) {
      let namesList = this.props.names[this.props.gender];
      this.setState({ originalNamesLength: namesList.length });
    }
  }

  render() {
    let display = null;
    if (this.props.gender.selected == null) {
      display = <SelectGender></SelectGender>
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
            <Progress></Progress>
            <br />
            <Buttons isFinished={this.isFinished()}
              name={this.props.names[this.props.gender.selected][this.props.names.index]}>
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
    names: store.names,
    gender: store.gender
  };
}

export default connect(mapStateToProps)(App);

