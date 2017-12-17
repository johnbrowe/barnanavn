import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import store from '../store.js';
import Name from './Name.js';
import Description from './Description.js';
import Progress from './Progress.js';
import Buttons from './Buttons.js';
import Menu from './Menu.js';


class Action extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <Menu></Menu>
                <div className="name-box">
                    <Name></Name>
                    <Description></Description>
                </div>
                <Buttons></Buttons>
                <Progress></Progress>
            </section>                          
        );
    }
}

const mapStateToProps = function (store) {
    return {
        gender: store.gender
    };
}

export default connect(mapStateToProps)(Action);

