import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';
import { restart } from '../actions/name-actions';
import { selectGender } from '../actions/gender-actions';
import MdBack from 'react-icons/lib/md/keyboard-arrow-left';
import { withRouter } from 'react-router';

class Restart extends Component {

    constructor(props) {
        super(props);
    }

    restart() {
        store.dispatch(restart());
        store.dispatch(selectGender(null));
        localStorage.clear();
        this.props.history.push('/');
    }

    shouldDisplayRestart() {
        return window.location.pathname == "/" ? "hide" : "";
    }

    render() {
        return (
            <div className={this.shouldDisplayRestart() + " navbar"}>
                <a className="restart" onClick={this.restart.bind(this)}><span className="back-icon"><MdBack></MdBack></span> Alt umaftur</a>
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
}
export default connect(mapStateToProps)(RestartWithRouter);
