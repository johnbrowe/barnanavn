import React, {Component} from 'react'
import '../App.css'
import {connect} from 'react-redux'
import Name from './Name'
import Description from './Description'
import Progress from './Progress'
import Buttons from './Buttons'
import Menu from './Menu'

class Action extends Component {
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

const mapStateToProps = function(store) {
    return {
        gender: store.gender
    }
}

export default connect(mapStateToProps)(Action)
