import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';
import { restart } from '../actions/name-actions';
import { selectGender } from '../actions/gender-actions';
import MdBack from 'react-icons/lib/md/keyboard-arrow-left';

class Restart extends Component {

    constructor(props) {
        super(props);
    }

    restart() {
        store.dispatch(restart());
        store.dispatch(selectGender(null));
        localStorage.clear();
    }

    render() {
        return (
            <div className="navbar">
                <a className="is-pulled-left" onClick={this.restart}><MdBack></MdBack> Byrja av nýggjum</a>
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

export default connect(mapStateToProps)(Restart);