import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

class Description extends Component {
    isFinished() {
        return (this.props.names.index + 1) > this.props.names[this.props.gender.selected].length
    }

    showDesc() {
        if(!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].desc
        }
    }

    showID() {
        if(!this.isFinished()) {
            return this.props.names[this.props.gender.selected][this.props.names.index].id
        } else {
            return "Onki navn eftir"
        }
    }

    render() {
        return (
            <div>
                <CSSTransitionGroup transitionName="display-name"
                                    transitionEnterTimeout={1000}
                                    transitionLeaveTimeout={0}>
                    <h2 className="name-description" key={this.showID()}>
                        <small><i>{this.showDesc()}</i></small>
                    </h2>
                </CSSTransitionGroup>
            </div>
        );
    }
};

const mapStateToProps = function(store) {
    return {
        names : store.names,
        gender: store.gender
    };
};

export default connect(mapStateToProps)(Description);
