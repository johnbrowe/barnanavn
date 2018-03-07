import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import store from '../store.js';
import Name from './Name.js';
import Description from './Description.js';
import Progress from './Progress.js';
import Buttons from './Buttons.js';
import Menu from './Menu.js';
import {selectGender} from "../actions/gender-actions";
import {restart} from "../actions/name-actions";


class Action extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        if(!this.props.gender.selected){
            store.dispatch(restart());
            store.dispatch(selectGender(null));
            localStorage.clear();
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <section>
                <Menu></Menu>
                <div className="name-box">
                    { !this.props.gender.selected ?
                        ""
                        : <div>
                            <Name></Name>
                            <Description></Description>
                        </div>
                    }

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

