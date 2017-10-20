import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import store from '../store.js';
import Name from './Name.js';
import Description from './Description.js';
import Progress from './Progress.js';
import Buttons from './Buttons.js';


class Action extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section>
                    <div className="section">
                        <Name></Name>
                        <Description></Description>
                        <br />
                        <Progress></Progress>
                        <br />
                        <Buttons>
                        </Buttons>
                    </div>
                </section>
            </div>

        );
    }
}

const mapStateToProps = function (store) {
    return {
        gender: store.gender
    };
}

export default connect(mapStateToProps)(Action);

