import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';

class Progress extends Component {

    constructor(props) {
        super(props);
    }

    progress() {
        return ((this.props.names.accepted.length + this.props.names.rejected.length) + 1) + "/" + (this.props.names[this.props.gender.selected].length + 1);
    }

    render() {
        return (
            <p>
                <span>{this.progress()}</span>
            </p>
        );
    }
}

const mapStateToProps = function (store) {

    return {
        names: store.names,
        gender: store.gender
    };
}

export default connect(mapStateToProps)(Progress);
