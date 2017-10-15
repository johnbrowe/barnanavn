import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';
import { addAcceptName, addRejectName, increment } from '../actions/name-actions';
import store from '../store.js';

class Buttons extends Component {

    constructor(props) {
        super(props);

        // Bindings
        this.rejectName = this.rejectName.bind(this);
        this.acceptName = this.acceptName.bind(this);
    }

    rejectName() {
        store.dispatch(addRejectName(this.props.name));
        store.dispatch(increment());
        
    }

    acceptName() {
        store.dispatch(addAcceptName(this.props.name));
        store.dispatch(increment());
    }


    render() {
        return (
            <div>
                <button className="button is-large is-danger" disabled={this.props.isFinished} onClick={this.rejectName}>
                    <MdClear></MdClear>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="button is-large is-success" disabled={this.props.isFinished} onClick={this.acceptName}>
                    <MdCheck></MdCheck>
                </button>
            </div>
        );
    }
}

export default Buttons;
