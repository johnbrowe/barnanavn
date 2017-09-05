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

class SelectGender extends Component {

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
    this.selectGender = this.selectGender.bind(this);    
  }


  
  selectGender(e){
    let gender = e.target.id;
    let namesList = names[gender];
    this.setState({gender: gender});
    this.setState({names: _.shuffle(namesList)});   
    this.setState({originalNamesLength: namesList.length});   
    localStorage.setItem('gender', JSON.stringify(gender));
  }

  render() {
    return (
        <div className="section">
            <h1>Vel kyn</h1>
            <br />
            <button className="button is-large" id="female" onClick={this.selectGender}><FaFemale></FaFemale> &nbsp;Genta</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button className="button is-large" id="male" onClick={this.selectGender}><FaMale></FaMale> &nbsp;Drongur</button>
        </div>
    );
  }
}

export default Select;
