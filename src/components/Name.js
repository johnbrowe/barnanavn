import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';
import store from '../store.js';

class Name extends Component {

    constructor(props) {
        super(props);

        // Bindings
    }

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

    render() {
        return (
            <div>
                <ReactCSSTransitionReplace
                    transitionName="fade-wait"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={600}>
                    <h1 className="display-name" key={this.props.id}>{this.showName()}</h1>
                </ReactCSSTransitionReplace>
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
