import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Name from './components/Name.js';
import SelectGender from './components/SelectGender.js';
import Description from './components/Description.js';
import Progress from './components/Progress.js';
import Restart from './components/Restart.js';
import List from './components/List.js';
import Buttons from './components/Buttons.js';
import store from './store.js';
import { selectGender } from './actions/gender-actions';


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
            
        <section>
          <div className="section">
            
            <Name></Name>
            <Description></Description>
            <br />
            <Progress></Progress>
            <br />
            <Buttons>
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

