import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

interface Props {
    accepted: string[]
    rejected: string[]
}

class Menu extends Component<Props, any> {
    render() {
        return (
            <ul className="tab-menu">
                <li style={{position: 'relative'}}>
                    <NavLink to="/nei">
                        Nei{' '}
                        <div className="list-counter list-counter-no">
                            {this.props.rejected.length}
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/navn">Navn</NavLink>
                </li>
                <li style={{position: 'relative'}}>
                    <NavLink to="/ja">
                        Ja{' '}
                        <div className="list-counter list-counter-yes">
                            {this.props.accepted.length}
                        </div>
                    </NavLink>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        rejected: store.names.rejected,
        accepted: store.names.accepted
    }
}

export default connect(mapStateToProps)(Menu)
