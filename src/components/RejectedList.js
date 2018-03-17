import React, { Component } from 'react';
import Menu from './Menu.js';
import './../App.css';
import { connect } from 'react-redux';

class RejectedList extends Component {
  constructor(props) {
    super(props);

    // Bindings
    this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this);

  }

  noneSelectedYetMsg() {
    if (this.props.rejected.length === 0) {
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

          {this.props.rejected.map((data, i) => {
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
    rejected: store.names.rejected
  };
};

export default connect(mapStateToProps)(RejectedList);
