import React, { Component } from 'react';
import FaFemale from 'react-icons/lib/fa/female';
import FaMale from 'react-icons/lib/fa/male';

class SelectGender extends Component {

  constructor(props) {
    super(props);
  }


  render() {
      return (
          <div className="section">
              <h1>Vel kyn</h1>
              <br />
              <button className="button is-large" id="female" onClick={this.props.selectGender}><FaFemale></FaFemale> &nbsp;Genta</button>
              <button className="button is-large" id="male" onClick={this.props.selectGender}><FaMale></FaMale> &nbsp;Drongur</button>
          </div>
      );
  }
}

export default SelectGender;
