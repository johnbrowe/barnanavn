import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';
import store from '../store.js';


class Description extends Component {

    constructor(props) {
        super(props);
    }

    isFinished() {
        return (this.props.names.index + 1) > this.props.names[this.props.gender.selected].length
    }

    showDesc() {
        if (!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].desc
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
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={600}>
                    <h2 className="name-description" key={this.showID()}><small><i>{this.showDesc()}</i></small></h2>
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

export default connect(mapStateToProps)(Description);
