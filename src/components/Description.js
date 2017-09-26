import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class Description extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionReplace
                    transitionName="fade-wait"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={600}>
                    <h2 className="subtitlte" key={this.props.id}><small><i>{this.props.desc}</i></small></h2>
                </ReactCSSTransitionReplace>
            </div>
        );
    }
}

export default Description;
