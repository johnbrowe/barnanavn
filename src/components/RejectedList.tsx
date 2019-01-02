import React, {Component} from 'react'
import {connect} from 'react-redux'

import './../App.css'
import Menu from './Menu.js'

interface Props {
    rejected: any
}

class RejectedList extends Component<Props, any> {
    constructor(props: any) {
        super(props)

    // Bindings
        this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this)
    }

    noneSelectedYetMsg() {
        if (this.props.rejected.length === 0) {
            return 'Einki navn'
        } else {
            return ''
        }
    }

    render() {
        return (
      <section>
        <Menu />
        <ul>
          <li>
            <b>Nøvn:</b>
          </li>
          {this.noneSelectedYetMsg()}

          {this.props.rejected.map((data: any, i: any) => {
              return <li key={i}>{data.name}</li>
          })}
        </ul>
      </section>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        rejected: store.names.rejected
    }
}

export default connect(mapStateToProps)(RejectedList)
