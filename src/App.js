import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import names from './data/names.json';

class App extends Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      names: names,
      accepted: [],
      rejected: [],
      currentNameIndex: 0
    };

    // Bindings
    this.rejectName = this.rejectName.bind(this);
    this.acceptName = this.acceptName.bind(this);
    this.showName = this.showName.bind(this);
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
    return (this.state.currentNameIndex + 1) + "/" + this.state.names.length
  }

  isFinished() {
    return (this.state.currentNameIndex + 1) > this.state.names.length
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
        <h1>Barnanavn</h1>
        <br />
        <p><b>{ this.showName() }</b></p>
        <p><small><i>{ this.showDesc() }</i></small></p>
        <br />
        <p>{ this.progress() }</p>
        <br />  
        <button className="button is-danger" disabled={this.isFinished()} onClick={this.rejectName}>Ódáma</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="button is-success" disabled={this.isFinished()} onClick={this.acceptName}>Dáma</button>
        <br />
        <br />
        <ul>
          <li><b>Dáma nøvn:</b></li>
          { this.noneSelectedYetMsg() }
          {this.state.accepted.map((data) => <li>{this.state.names[data].name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
