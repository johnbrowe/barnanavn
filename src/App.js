import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      names: [
        { "name": "Absalon", "description": "(Absalon, Absaloni, Absalons)" },
        { "name": "Adolf", "description": "[a:d-] (Adolf, Adolfi, Adolfs)" },         
        { "name": "Adrian", "description": "[a:d-] (Adrian, Adriani, Adrians)" },
        { "name": "Adriel", "description": "(Adriel, Adrieli, Adriels)" },
        { "name": "Aðalgeir", "description": "(Aðalgeir, Aðalgeiri, Aðalgeirs)" },
        { "name": "Aðalstein", "description": "(Aðalstein, Aðalsteini, Aðalsteins)" },
        { "name": "Aggusteinus", "description": "(Aggusteinus, Aggusteinusi, Aggusteinusar*)" },
        { "name": "Agnar", "description": "(Agnar, Agnari, Agnars)" },
        { "name": "Aksal", "description": "(Aksal, Aksali, Aksals)" },
        { "name": "Aksel", "description": "(Aksel, Akseli, Aksels)" },
        { "name": "Albert", "description": "(Albert, Alberti, Alberts)" },
        { "name": "Albin", "description": "(Albin, Albini, Albins)" },
        { "name": "Aleks", "description": "[a:l-] (Aleks, Aleksi, Aleks)" },
        { "name": "Aleksandur", "description": "[-'s-] (Aleksandur, Aleksanduri, Aleksandurs)" },
        { "name": "Alfred", "description": "(Alfred, Alfredi, Alfreds)" },
        { "name": "Allan", "description": "[-l:-] (Allan, Allani, Allans)" },
        { "name": "Alvi", "description": "(Alva, Alva, Alva)" },
        { "name": "Amadeus", "description": "[-'d-] (Amadeus, Amadeusi, Amadeusar*)" }
      ],
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

  showDescription() {
    if (!this.isFinished()) {
      return this.state.names[this.state.currentNameIndex].description
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Barnanavn</h1>
        <br />
        <p><b>{ this.showName() }</b></p>
        <p><small><i>{ this.showDescription() }</i></small></p>
        <br />
        <br />
        <p>{ this.progress() }</p>
        <button className="button is-danger" disabled={this.isFinished()} onClick={this.rejectName}>Ódáma</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="button is-success" disabled={this.isFinished()} onClick={this.acceptName}>Dáma</button>
        <br />
        <br />
        <ul>
          <li><b>Dáma nøvn:</b></li>
          {this.state.accepted.map((data) => <li>{this.state.names[data].name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
