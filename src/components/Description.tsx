import React, {Component} from 'react'
import posed from 'react-pose'
import {connect} from 'react-redux'

const Box = posed.div({
    visible: {opacity: 1, transition: {duration: 1000}},
    hidden: {opacity: 0, transition: {duration: 0}}
})

interface Props {
    names: any
    gender: any
}

class Description extends Component<Props, any> {
    state = {isVisible: true}

    componentWillReceiveProps() {
        this.setState({isVisible: true})

        setTimeout(() => {
            this.setState({isVisible: true})
        }, 1)
    }

    isFinished() {
        return this.props.names.index + 1 > this.props.names[this.props.gender.selected].length
    }

    showDesc() {
        if (!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].desc
        }
    }

    showID() {
        if (!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].id
        } else {
            return 'Onki navn eftir'
        }
    }

    render() {
        return (
            <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'}>
                <h2 className="name-description" key={this.showID()}>
                    <small>
                        <i>{this.showDesc()}</i>
                    </small>
                </h2>
            </Box>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        names: store.names,
        gender: store.gender
    }
}

export default connect(mapStateToProps)(Description)
