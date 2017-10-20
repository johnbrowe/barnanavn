import React, { Component } from 'react';
import FaFemale from 'react-icons/lib/fa/female';
import FaMale from 'react-icons/lib/fa/male';
import { selectGender } from '../actions/gender-actions';
import store from '../store.js';
import { withRouter } from 'react-router';


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
            <div className="section">
                <h1>Vel kyn</h1>
                <br />
                <button className="button is-large" onClick={this.selectFemale}><FaFemale></FaFemale> &nbsp;Genta</button>
                <button className="button is-large" onClick={this.selectMale}><FaMale></FaMale> &nbsp;Drongur</button>
            </div>
        );
    }
}

const SelectGenderWithRouter = withRouter(SelectGender);
export default SelectGenderWithRouter;
