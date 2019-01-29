import React, {Component} from 'react'
import {connect} from 'react-redux'

import './../App.css'

interface Props {
    accepted: any
}

class List extends Component<Props, any> {
    constructor(props: Props) {
        super(props)

        // Bindings
        this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this)
    }

    noneSelectedYetMsg() {
        if (this.props.accepted.length === 0) {
            return 'Onki navn'
        } else {
            return ''
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <b>Nøvn:</b>
                    </li>
                    {this.noneSelectedYetMsg()}

                    {this.props.accepted.map((data: any, i: number) => {
                        return <li key={i}>{data.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        accepted: store.names.accepted
    }
}

export default connect(mapStateToProps)(List)
