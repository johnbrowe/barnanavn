import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SelectGender from './components/SelectGender.js';
import store from './store.js';
import Restart from './components/Restart.js';
import Info from './components/Info.js';
import Progress from './components/Progress.js';
import Action from './components/Action.js';
import AcceptedList from './components/AcceptedList.js';
import RejectedList from './components/RejectedList.js';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Restart></Restart>
        <Info></Info>
        <div className="action-container">
          <div className="action-box">
            <Switch>
              <Route exact path='/' component={SelectGender} />
              <Route exact path='/navn' component={Action} />
              <Route exact path='/nei' component={RejectedList} />
              <Route exact path='/ja' component={AcceptedList} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    gender: store.gender
  };
}


export default withRouter(connect(mapStateToProps)(App));

