import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      names: [
        "Absalon (Absalon, Absaloni, Absalons)",
        "Adolf [a:d-] (Adolf, Adolfi, Adolfs)",         
        "Adrian[a:d-] (Adrian, Adriani, Adrians)",
        "Adriel(Adriel, Adrieli, Adriels)",
        "Aðalgeir(Aðalgeir, Aðalgeiri, Aðalgeirs)",
        "Aðalstein(Aðalstein, Aðalsteini, Aðalsteins)",
        "Aggusteinus(Aggusteinus, Aggusteinusi, Aggusteinusar*)",
        "Agnar (Agnar, Agnari, Agnars)",
        "Aksal(Aksal, Aksali, Aksals)",
        "Aksel(Aksel, Akseli, Aksels)",
        "Albert(Albert, Alberti, Alberts)",
        "Albin(Albin, Albini, Albins)",
        "Aleks[a:l-] (Aleks, Aleksi, Aleks)",
        "Aleksandur[-'s-] (Aleksandur, Aleksanduri, Aleksandurs)",
        "Alfred(Alfred, Alfredi, Alfreds)",
        "Allan[-l:-] (Allan, Allani, Allans)",
        "Alvi (Alva, Alva, Alva)",
        "Amadeus [-'d-] (Amadeus, Amadeusi, Amadeusar*)"
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
    return ((this.state.currentNameIndex + 1) * 100) / (this.state.names.length); 
  }

  showName() {
    if (this.progress() <= 100) {
      return this.state.names[this.state.currentNameIndex];
    } else {
      return "Onki navn eftir";
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Barnanavn</h1>
        <h3>{this.showName()}</h3>
        <button className="button is-danger" onClick={this.rejectName}>Ódáma</button>
        <button className="button is-success" onClick={this.acceptName}>Dáma</button>
        <h4>{this.progress()}%</h4>
        <ul>
          <li>jjj</li>
          {this.state.accepted.map((data) => <li>{this.state.names[data]}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
