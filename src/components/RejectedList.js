import React, { Component } from 'react';
import './../App.css';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux';
import store from './../store.js';


class RejectedList extends Component {

  constructor(props) {
    super(props);

    // Bindings
    this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this);

  }

  noneSelectedYetMsg() {
    if (this.props.rejected.length == 0) {
      return "Onki navn"
    } else {
      return "";
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li><b>Nøvn:</b></li>
          {this.noneSelectedYetMsg()}

          {this.props.rejected.map((data, i) => {
            return <li key={i}>
              {data.name}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    rejected: store.names.rejected
  };
}

export default connect(mapStateToProps)(RejectedList);
