import React, {Component} from 'react'
import posed from 'react-pose'
import {connect} from 'react-redux'

interface Props {
    gender: any
    names: any
}

const Box = posed.div({
    visible: {opacity: 1, transition: {duration: 500}},
    hidden: {opacity: 0, transition: {duration: 0}}
})

class Name extends Component<Props, any> {
    state = {isVisible: true}

    componentWillReceiveProps() {
        this.setState({isVisible: false})

        setTimeout(() => {
            this.setState({isVisible: true})
        }, 1)
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

    showName() {
        if (!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].name
        } else {
            return 'Onki navn eftir'
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
                <h1 className="display-name" key={this.showID()}>
                    {this.showName()}
                </h1>
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

export default connect(mapStateToProps)(Name)
