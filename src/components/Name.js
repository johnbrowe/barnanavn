import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';
import store from '../store.js';
import { render } from '../actions/menu-actions';


class Name extends Component {

    constructor(props) {
        super(props);

        // Bindings
    }

    componentWillMount() {
        store.dispatch(render());
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
                <ReactCSSTransitionReplace
                    transitionName="fade-wait"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>
                    <h1 className="display-name" key={this.showID()}>{this.showName()}</h1>
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
};

export default connect(mapStateToProps)(Name);
