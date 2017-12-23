import React, { Component } from 'react';
import { selectGender } from '../actions/gender-actions';
import store from '../store.js';
import { withRouter } from 'react-router';

class SelectGender extends Component {

    selectFemale = () => {
        store.dispatch(selectGender('female'));
        this.props.history.push('/navn');
    };

    selectMale = () => {
        store.dispatch(selectGender('male'));
        this.props.history.push('/navn');
    };

    render() {
        return <section className="gender">
            <div>
              <img className="logo" src="images/navnabretti.svg" alt="Navnabretti logo" />
            </div>
            <div className="gender-box">
              <div className="buttons">
                <button className="button girl" onClick={this.selectFemale}>
                  Genta
                </button>
                <button className="button boy" onClick={this.selectMale}>
                  Drongur
                </button>
              </div>
            </div>
          </section>;
    }
}

const SelectGenderWithRouter = withRouter(SelectGender);
export default SelectGenderWithRouter;
