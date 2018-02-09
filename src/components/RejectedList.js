import React, { Component } from 'react';
import Menu from './Menu.js';
import './../App.css';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux';
import store from './../store.js';
import { moveToAccepted } from '../actions/name-actions';

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

  moveToAccepted(e) {
    store.dispatch(moveToAccepted(e.target.id));
  }

  render() {
    return (
      <section>
        <Menu></Menu>
        <p>Nøvn:</p>
        <ul className="name-list">
            <li>{ this.noneSelectedYetMsg() }</li>

          {this.props.rejected.map((data, i) => {
            return <li key={i}>
              {data.name} <span id={data.id} onClick={this.moveToAccepted}>x</span>
            </li>
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    rejected: store.names.rejected
  };
}

export default connect(mapStateToProps)(RejectedList);
