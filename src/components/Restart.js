import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';
import { restart } from '../actions/name-actions';
import { selectGender } from '../actions/gender-actions';
import MdBack from 'react-icons/lib/md/keyboard-arrow-left';
import { withRouter } from 'react-router';

class Restart extends Component {
    restart() {
        store.dispatch(restart());
        store.dispatch(selectGender(null));
        localStorage.clear();
        this.props.history.push('/');
    }

    static shouldDisplayRestart() {
        return window.location.pathname === "/" ? "hide" : "";
    }

    render() {
        return (
            <div className={Restart.shouldDisplayRestart() + " navbar"}>
                <a className="restart" onClick={this.restart.bind(this)}><span className="back-icon"><MdBack /></span> Byrja av nýggjum</a>
            </div>
        );
    }
}

const RestartWithRouter = withRouter(Restart);
const mapStateToProps = function (store) {
    return {
        names: store.names,
        gender: store.gender
    };
};

export default connect(mapStateToProps)(RestartWithRouter);
