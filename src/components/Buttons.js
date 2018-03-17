import React, { Component } from 'react';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';
import { addAcceptName, addRejectName, increment } from '../actions/name-actions';
import { connect } from 'react-redux';
import store from '../store.js';

class Buttons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonDisable: false
        };

        // Bindings
        this.rejectName = this.rejectName.bind(this);
        this.acceptName = this.acceptName.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    isFinished() {
        return (this.props.names.index + 1) > this.props.names.length
    }

    rejectName() {
        this.disableButton();
        store.dispatch(addRejectName(this.props.names[this.props.gender.selected][this.props.names.index]));
        store.dispatch(increment());
    }

    acceptName() {
        this.disableButton();
        store.dispatch(addAcceptName(this.props.names[this.props.gender.selected][this.props.names.index]));
        store.dispatch(increment());
    }

    disableButton(){
        // Disable button
        this.setState({buttonDisable:true});
        // Endable button again after x amount of seconds
        setTimeout(() => this.setState({buttonDisable:false}), 1000);
    }

    render() {
        return (
            <div className="buttons">
                <button className="button button-no" disabled={this.isFinished() || this.state.buttonDisable} onClick={this.rejectName}>
                    <MdClear />
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="button button-yes" disabled={this.isFinished() || this.state.buttonDisable} onClick={this.acceptName}>
                    <MdCheck />
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
};

export default connect(mapStateToProps)(Buttons);
   
