import React, { Component } from 'react';
import './../App.css';
import Menu from './Menu.js';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux';
import store from './../store.js';
import { moveToRejected } from '../actions/name-actions';


class List extends Component {

  constructor(props) {
    super(props);

    // Bindings
    this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this);
    this.moveToRejected = this.moveToRejected.bind(this);
  }

  moveToRejected(e) {
    store.dispatch(moveToRejected(e.target.id));
  }

  noneSelectedYetMsg() {
    if (this.props.accepted.length == 0) {
      return "Onki navn"
    } else {
      return "";
    }
  }

  render() {
    return (
      <section>
        <Menu></Menu>
        <p>Nøvn:</p>
        <ul className="name-list">
          {this.noneSelectedYetMsg()}

          {this.props.accepted.map((data, i) => {
            return <li key={data.id}>
              {data.name} <span id={data.id} onClick={this.moveToRejected}>x</span>
            </li>
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    accepted: store.names.accepted
  };
}

export default connect(mapStateToProps)(List);
