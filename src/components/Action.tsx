import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../App.css'

import Buttons from './Buttons'
import Description from './Description'
import Menu from './Menu'
import Name from './Name'
import Progress from './Progress'

interface Props {
    gender: any
}

class Action extends Component<Props, any> {
    render() {
        return (
            <section>
                <Menu />
                <div className="name-box">
                    {!this.props.gender.selected ? (
                        ''
                    ) : (
                        <div>
                            <Name />
                            <Description />
                        </div>
                    )}
                </div>
                <Buttons />
                <Progress />
            </section>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        gender: store.gender
    }
}

export default connect(mapStateToProps)(Action)
