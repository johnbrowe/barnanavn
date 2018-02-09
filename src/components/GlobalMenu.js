import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux';
import store from './../store.js';
import { restart } from '../actions/name-actions';
import { selectGender } from '../actions/gender-actions';
import { withRouter } from 'react-router';
import MdBack from 'react-icons/lib/md/keyboard-arrow-left';
import MdInfo from 'react-icons/lib/md/info-outline';

class GlobalMenu extends Component {
    constructor(props) {
        super(props);

        // Bindings
        this.goBack = this.goBack.bind(this);
        this.restart = this.restart.bind(this);
    }

    restart() {
        store.dispatch(restart());
        store.dispatch(selectGender(null));
        localStorage.clear();
        this.props.history.push('/');
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="navbar">
                <div className="left-menu">
                    <a className={this.props.menu.restart ? "" : "hide" + " suttle-link"} onClick={this.restart}><span className="suttle-icon"><MdBack></MdBack></span> Alt umaftur</a>
                    <a className={this.props.menu.back ? "" : "hide" + " suttle-link"} onClick={this.goBack}><span className="suttle-icon"><MdBack></MdBack></span> Aftur</a>
                </div>
                <div>
                    <a href="./info" className={this.props.menu.info ? "" : "hide"}><span className="suttle-icon"><MdInfo></MdInfo></span></a>
                </div>
            </div>
        );
    }
}

const GlobalMenuWithRouter = withRouter(GlobalMenu);
const mapStateToProps = function (store) {
    return {
        menu: store.menu.menuState
    };
};

export default connect(mapStateToProps)(GlobalMenuWithRouter);
