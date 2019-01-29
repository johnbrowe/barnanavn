import React, {Component} from 'react'
import MdCheck from 'react-icons/lib/md/check'
import MdClear from 'react-icons/lib/md/clear'
import {connect} from 'react-redux'

import {addAcceptName, addRejectName, increment} from '../actions/name-actions'
import store from '../store.js'

interface Props {
    gender: any
    names: any
}

class Buttons extends Component<Props, any> {
    constructor(props: Props) {
        super(props)

        this.state = {
            buttonDisable: false
        }

        // Bindings
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
        this.disableButton()
        store.dispatch(
            addRejectName(this.props.names[this.props.gender.selected][this.props.names.index])
        )
        store.dispatch(increment())
    }

    acceptName() {
        this.disableButton()
        store.dispatch(
            addAcceptName(this.props.names[this.props.gender.selected][this.props.names.index])
        )
        store.dispatch(increment())
    }

    disableButton() {
        // Disable button
        this.setState({buttonDisable: true})
        // Endable button again after x amount of seconds
        setTimeout(() => this.setState({buttonDisable: false}), 1000)
    }

    render() {
        return (
            <div className="buttons">
                <button
                    className="button button-no"
                    disabled={this.isFinished() || this.state.buttonDisable}
                    onClick={this.rejectName}>
                    <MdClear />
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    className="button button-yes"
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