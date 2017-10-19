import React, { Component } from 'react';
import FaFemale from 'react-icons/lib/fa/female';
import FaMale from 'react-icons/lib/fa/male';
import { selectGender } from '../actions/gender-actions';
import store from '../store.js';
import { withRouter } from 'react-router';
import Menu from './Menu.js';


class SelectGender extends Component {

    selectFemale = () => {
        store.dispatch(selectGender('female'));
        this.props.history.push('/navn');
    }

    selectMale = () => {
        store.dispatch(selectGender('male'));
        this.props.history.push('/navn');
    }

    render() {
        return (
            <section className="gender">
                <h1 className="display-name">Vel kyn</h1>
                <div className="gender-box">
                    <div className="buttons">
                        <button className="button girl" onClick={this.selectFemale}>Genta</button>
                        <button className="button boy" onClick={this.selectMale}>Drongur</button>
                    </div>
                </div>
            </section>
        );
    }
}

const SelectGenderWithRouter = withRouter(SelectGender);
export default SelectGenderWithRouter;
