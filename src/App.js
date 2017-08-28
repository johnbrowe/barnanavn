import React, { Component } from 'react';
import './App.css';
import names from './data/names.json';
import _ from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';
import MdBack from 'react-icons/lib/md/keyboard-arrow-left';
import FaFemale from 'react-icons/lib/fa/female';
import FaMale from 'react-icons/lib/fa/male';

class App extends Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      names: (typeof localStorage["gender"] != "undefined") ? _.shuffle(names[JSON.parse(localStorage.getItem('gender'))]) : [],
      originalNamesLength: (typeof localStorage["gender"] != "undefined") ? names[JSON.parse(localStorage.getItem('gender'))].length : 0,
      accepted: (typeof localStorage["acceptedNames"] != "undefined") ? JSON.parse(localStorage.getItem('acceptedNames')) : [],
      rejected: (typeof localStorage["rejectedNames"] != "undefined") ? JSON.parse(localStorage.getItem('rejectedNames')) : [],
      currentNameIndex: 0,
      gender: (typeof localStorage["gender"] != "undefined") ? JSON.parse(localStorage.getItem('gender')) : null
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
    this.handleAllAcceptedNames = this.handleAllAcceptedNames.bind(this);
    this.isAlreadyAccepted = this.isAlreadyAccepted.bind(this);
    this.restart = this.restart.bind(this);
    this.selectGender = this.selectGender.bind(this);
    
    this.handleAllAcceptedNames();
    this.handleAllRejectedNames();
  }

  handleAllAcceptedNames() {
    if(this.state.accepted.length > 0){
      this.state.names = this.state.names.filter((obj) => {
        return this.isAlreadyAccepted(obj.id);        
      });  
    }
  }

  isAlreadyAccepted(id){
    let result = this.state.accepted.some((obj) => {
      return obj.id === id;  
    });

    return !result;
  }
  
  handleAllRejectedNames() {
    if(this.state.rejected.length > 0){
      this.state.names = this.state.names.filter((obj) => {
        return this.isAlreadyRejected(obj.id);        
      });  
    }
  }

  isAlreadyRejected(id){
    let result = this.state.rejected.some((obj) => {
      return obj.id === id;  
    });

    return !result;
  }

  rejectName() {
    this.state.rejected.push(this.state.names[this.state.currentNameIndex]);
    localStorage.setItem('rejectedNames', JSON.stringify(this.state.rejected));
    this.increment();
  }

  acceptName() {
    this.state.accepted.push(this.state.names[this.state.currentNameIndex]);
    localStorage.setItem('acceptedNames', JSON.stringify(this.state.accepted));
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
    return ((this.state.accepted.length + this.state.rejected.length) + 1)  + "/" + (this.state.originalNamesLength + 1);
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
      return "Onki navn"    
    } else {
      return "";
    }
  }

  restart(){
    this.setState({names:   _.shuffle(names)})
    this.setState({accepted: []})
    this.setState({rejected: []});
    this.setState({currentNameIndex: 0});
    this.setState({gender: null});
    localStorage.clear();
    
  }

  selectGender(e){
    let gender = e.target.id;
    let namesList = names[gender];
    this.setState({gender: gender});
    this.setState({names: _.shuffle(namesList)});   
    this.setState({originalNamesLength: namesList.length});   
    localStorage.setItem('gender', JSON.stringify(gender));
  }

  fixSelectGender(){
    if(this.state.gender){
      let namesList = names[this.state.gender];
      this.setState({names: _.shuffle(namesList)});   
      this.setState({originalNamesLength: namesList.length});
    }
  }

  render() {
    let display = null;
    if (this.state.gender == null) {
      display = <div className="section">
        <h1>Vel kyn</h1>
        <br />
        <button className="button is-large" id="female" onClick={this.selectGender}><FaFemale></FaFemale> &nbsp;Genta</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="button is-large" id="male" onClick={this.selectGender}><FaMale></FaMale> &nbsp;Drongur</button>
      </div>;
    } else {
      display = <div>
      <div className="navbar">
        <a className="is-pulled-left" onClick={this.restart}><MdBack></MdBack> Byrja av nýggjum</a>
      </div>
      <section> 
        <div className="section">
          <ReactCSSTransitionReplace
            transitionName="fade-wait"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
            <h1 className="title" key={this.showID()}>{this.showName()}</h1>
          </ReactCSSTransitionReplace>

          <ReactCSSTransitionReplace
            transitionName="fade-wait"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
            <h2 className="subtitlte" key={this.showID()}><small><i>{this.showDesc()}</i></small></h2>
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

            <li><b>Nøvn:</b></li>
            {this.noneSelectedYetMsg()}
            {this.state.accepted.map((data, i) => {

              return <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={900}><li key={data.id}>
                  {data.name}
                </li>
              </CSSTransitionGroup>
            })}
          </ul>
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

export default App;
