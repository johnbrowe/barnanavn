import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SelectGender from './components/SelectGender.js';
import store from './store.js';
import Restart from './components/Restart.js';
import Action from './components/Action.js';
import AcceptedList from './components/AcceptedList.js';
import RejectedList from './components/RejectedList.js';
import { Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let display = null;
    if (this.props.gender.selected == null) {
      display = <SelectGender></SelectGender>
    } else {
      display = <div>
        <Restart></Restart> 
        <ul className="tab-menu">
          <li><a href="./nei">Nei</a></li>
          <li><a href="./navn">Navn</a></li>
          <li><a href="./ja">Ja</a></li>
        </ul>
        <Switch>
          <Route exact path='/navn' component={Action}/>
          <Route path='/nei' component={RejectedList}/>
          <Route path='/ja' component={AcceptedList}/>
        </Switch>
        
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
    gender: store.gender
  };
}

export default connect(mapStateToProps)(App);

