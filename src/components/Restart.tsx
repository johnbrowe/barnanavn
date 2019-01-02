import React, {Component} from 'react'
import MdBack from 'react-icons/lib/md/keyboard-arrow-left'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {selectGender} from '../actions/gender-actions'
import {restart} from '../actions/name-actions'
import store from '../store.js'

class Restart extends Component<any, any> {
    restart = () => {
        store.dispatch(restart())
        store.dispatch(selectGender(null))
        localStorage.clear()
        this.props.history.push('/')
    }

    static shouldDisplayRestart() {
        return window.location.pathname === '/' ? 'hide' : ''
    }

    render() {
        return (
            <div className={Restart.shouldDisplayRestart() + ' navbar'}>
                <a className="restart" onClick={this.restart}>
                    <span className="back-icon">
                        <MdBack />
                    </span>{' '}
                    Byrja av nýggjum
                </a>
            </div>
        )
    }
}

const RestartWithRouter = withRouter(Restart)
const mapStateToProps = (storey: any) => {
    return {
        names: storey.names,
        gender: storey.gender
    }
}

export default connect(mapStateToProps)(RestartWithRouter)
