import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';
import { addAcceptName, addRejectName, increment } from '../actions/name-actions';
import { connect } from 'react-redux';
import store from '../store.js';

class Buttons extends Component {

    constructor(props) {
        super(props);

        // Bindings
        this.rejectName = this.rejectName.bind(this);
        this.acceptName = this.acceptName.bind(this);
    }

    isFinished() {
        return (this.props.names.index + 1) > this.props.names.length
    }

    rejectName() {
        store.dispatch(addRejectName(this.props.names[this.props.gender.selected][this.props.names.index]));
        store.dispatch(increment());
        
    }

    acceptName() {
        store.dispatch(addAcceptName(this.props.names[this.props.gender.selected][this.props.names.index]));
        store.dispatch(increment());
    }

    render() {
        return (
            <div className="buttons">
                <button className="button button-no" disabled={this.isFinished()} onClick={this.rejectName}>
                    <MdClear></MdClear>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="button button-yes" disabled={this.isFinished()} onClick={this.acceptName}>
                    <MdCheck></MdCheck>
                </button>
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

export default connect(mapStateToProps)(Buttons);
   
