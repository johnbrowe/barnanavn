import React, { Component } from 'react';
import { connect } from 'react-redux';

class Name extends Component {
    isFinished() {
        return (this.props.names[this.props.gender.selected].index + 1) > this.props.names[this.props.gender.selected].length
    }

    showName() {
        if (!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].name
        } else {
            return "Onki navn eftir"
        }
    }

    showID() {
        if (!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].id
        } else {
            return "Onki navn eftir"
        }
    }

    render() {
        return (
            <div>
              <h1 className="display-name" key={this.showID()}>{this.showName()}</h1>
            </div>
        );
    }
}


const mapStateToProps = function (store) {

    return {
        names: store.names,
        gender: store.gender
    };
}

export default connect(mapStateToProps)(Name);
