import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { selectGender } from '../actions/gender-actions'
import store from '../store.js'

import Logo from './Logo'

class SelectGender extends Component<any, any> {
    selectFemale = () => {
        store.dispatch(selectGender('female'))
        this.props.history.push('/navn')
    }

    selectMale = () => {
        store.dispatch(selectGender('male'))
        this.props.history.push('/navn')
    }

    render () {
        return (
      <section className="gender">
        <div className="logo">
          <Logo />
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
      </section>
        )
    }
}

const SelectGenderWithRouter = withRouter(SelectGender)
export default SelectGenderWithRouter
