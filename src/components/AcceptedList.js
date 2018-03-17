import React, { Component } from 'react';
import './../App.css';
import Menu from './Menu.js';
import { connect } from 'react-redux';

class List extends Component {
  constructor(props) {
    super(props);

    // Bindings
    this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this);
  }

  noneSelectedYetMsg() {
    if (this.props.accepted.length === 0) {
      return "Einki navn";
    } else {
      return "";
    }
  }

  render() {
    return (
      <section>
        <Menu />
        <ul>
          <li><b>Nøvn:</b></li>
          {this.noneSelectedYetMsg()}

          {this.props.accepted.map((data, i) => {
            return <li key={i}>
              {data.name}
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
};

export default connect(mapStateToProps)(List);
