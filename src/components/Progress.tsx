import React, {Component} from 'react'
import {connect} from 'react-redux'

class Progress extends Component<any, any> {
    render() {
        const total = this.props.names[this.props.gender.selected + 'Count']
        const actual = this.props.names.accepted.length + this.props.names.rejected.length + 1

        return (
            <p className="progress">
                {actual}/{total}
            </p>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        names: store.names,
        gender: store.gender
    }
}

export default connect(mapStateToProps)(Progress)
