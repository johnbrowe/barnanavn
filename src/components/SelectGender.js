import React, { Component } from 'react';
import FaFemale from 'react-icons/lib/fa/female';
import FaMale from 'react-icons/lib/fa/male';
import { selectGender } from '../actions/gender-actions';
import store from '../store.js';

const SelectGender = () => {
    const selectFemale = () => {
        store.dispatch(selectGender('female'));
    }

    const selectMale = () => {
        store.dispatch(selectGender('male'));
    }

    return (
        <div className="section">
            <h1>Vel kyn</h1>
            <br />
            <button className="button is-large" onClick={selectFemale}><FaFemale></FaFemale> &nbsp;Genta</button>
            <button className="button is-large" onClick={selectMale}><FaMale></FaMale> &nbsp;Drongur</button>
        </div>
    );
}

export default SelectGender;
