import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import names from './data/names.json';
import _ from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';

class App extends Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      names: _.shuffle(names),
      accepted: [],
      rejected: [],
      currentNameIndex: 0
    };

    // Bindings
    this.rejectName = this.rejectName.bind(this);
    this.acceptName = this.acceptName.bind(this);
    this.showName = this.showName.bind(this);
    this.showID = this.showID.bind(this);
    this.increment = this.increment.bind(this);
    this.progress = this.progress.bind(this);
    this.isFinished = this.isFinished.bind(this);
    this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this);
  }

  rejectName() {
    this.state.rejected.push(this.state.currentNameIndex);
    this.increment();
  }

  acceptName() {
    this.state.accepted.push(this.state.currentNameIndex);
    this.increment();
  }

  increment() {
    this.setState(function (prevState, props) {
      return {
        currentNameIndex: prevState.currentNameIndex + 1
      };
    });
  }

  progress() {
    return (this.state.currentNameIndex + 1) + "/" + (this.state.names.length + 1);
  }

  isFinished() {
    return (this.state.currentNameIndex + 1) > this.state.names.length
  }

  showID() {
    if (!this.isFinished()) {
      return this.state.names[this.state.currentNameIndex].id
    } else {
      return "Onki navn eftir"
    }
  }

  showName() {
    if (!this.isFinished()) {
      return this.state.names[this.state.currentNameIndex].name
    } else {
      return "Onki navn eftir"
    }
  }

  showDesc() {
    if (!this.isFinished()) {
      return this.state.names[this.state.currentNameIndex].desc
    }
  }

  noneSelectedYetMsg(){
    if(this.state.accepted.length == 0){
      return "Onki navn dáma enn"    
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="App">
        <ReactCSSTransitionReplace
          transitionName="fade-wait"
          transitionEnterTimeout={600} 
          transitionLeaveTimeout={600}>
          <h1 key={this.showID()}>{this.showName()}</h1>
        </ReactCSSTransitionReplace>

        <ReactCSSTransitionReplace
          transitionName="fade-wait"
          transitionEnterTimeout={600} 
          transitionLeaveTimeout={600}>
          <p key={this.showID()}><small><i>{this.showDesc()}</i></small></p>
        </ReactCSSTransitionReplace>

        <br />
        <p>
          <span key={this.progress()}>{this.progress()}</span>
        
        </p>
        <br />
        <button className="button is-large is-danger" disabled={this.isFinished()} onClick={this.rejectName}>
        <MdClear></MdClear>
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="button is-large is-success" disabled={this.isFinished()} onClick={this.acceptName}>
        <MdCheck></MdCheck>
        </button>
        <br />
        <br />
        <ul>

          <li><b>Vald nøvn:</b></li>
          {this.noneSelectedYetMsg()}
          {this.state.accepted.map((data, i) => {

            return <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={900}><li key={this.state.names[data].id}>
                {this.state.names[data].name}
              </li>
            </CSSTransitionGroup>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
