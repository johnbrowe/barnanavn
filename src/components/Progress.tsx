import {Line} from 'rc-progress'
import React, {Component} from 'react'
import {connect} from 'react-redux'

class Progress extends Component<any, any> {
    progress() {
        const total = this.props.names[this.props.gender.selected + 'Count']
        const actual = this.props.names.accepted.length + this.props.names.rejected.length + 1
        return (actual * 100) / total
    }

    render() {
        return (
            <div className="progress-box">
                <Line
                    percent={this.progress()}
                    strokeWidth="1.5"
                    trailWidth="1.5"
                    strokeColor="#118C8B"
                    trailColor="#F1f1f1"
                    strokeLinecap="square"
                />
            </div>
        )
    }
}

const mapStateToProps = (store: any ) => {
    return {
        names: store.names,
        gender: store.gender
    }
}

export default connect(mapStateToProps)(Progress)
