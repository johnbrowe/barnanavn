import _ from 'lodash'
import React, {Component} from 'react'
import MdCheck from 'react-icons/lib/md/check'
import MdClear from 'react-icons/lib/md/clear'
import {connect} from 'react-redux'

import {addAcceptName, addRejectName, increment} from '../actions/name-actions'
import store from '../store.js'

interface Props {
    gender: {
        selected: 'male' | 'female'
    }
    names: {
        index: number
        maleCount: number
        femaleCount: number
        accepted: string[]
        rejected: string[]
        male: string[]
        female: string[]
    }
}

interface State {
    buttonClicked: string
    buttonDisable: boolean
}

class Buttons extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            buttonDisable: false,
            buttonClicked: ''
        }

        this.rejectName = this.rejectName.bind(this)
        this.acceptName = this.acceptName.bind(this)
        this.disableButton = this.disableButton.bind(this)
    }

    isFinished() {
        let count = 0
        if (this.props.gender.selected === 'male') {
            count = this.props.names.maleCount
        } else {
            count = this.props.names.femaleCount
        }

        return this.props.names.accepted.length + this.props.names.rejected.length >= count
    }

    rejectName() {
        this.disableButton('reject')

        const gender = this.props.gender.selected
        const index = this.props.names.index
        const name = this.props.names[gender][index]

        store.dispatch(addRejectName(name))
        store.dispatch(increment())
    }

    acceptName() {
        this.disableButton('accept')

        const gender = this.props.gender.selected
        const index = this.props.names.index
        const name = this.props.names[gender][index]

        store.dispatch(addAcceptName(name))
        store.dispatch(increment())
    }

    disableButton(whichButton: string) {
        // Disable button
        this.setState({buttonDisable: true, buttonClicked: whichButton})
        // Enable button again after x amount of seconds
        setTimeout(() => this.setState({buttonDisable: false, buttonClicked: ''}), 200)
    }

    render() {
        return (
            <div className="buttons">
                <button
                    className={`button button-no ${
                        this.state.buttonClicked === 'reject' ? 'button-disabled' : ''
                    }`}
                    disabled={this.isFinished() || this.state.buttonDisable}
                    onClick={this.rejectName}>
                    <MdClear />
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    className={`button button-yes ${
                        this.state.buttonClicked === 'accept' ? 'button-disabled' : ''
                    }`}
                    disabled={this.isFinished() || this.state.buttonDisable}
                    onClick={this.acceptName}>
                    <MdCheck />
                </button>
            </div>
        )
    }
}

// tslint:disable-next-line:no-shadowed-variable
const mapStateToProps = (store: any) => {
    return {
        names: store.names,
        gender: store.gender
    }
}

export default connect(mapStateToProps)(Buttons)
