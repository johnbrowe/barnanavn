import React, { Component } from 'react';

class Progress extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                <span key={this.props.progress}>{this.props.progress}</span>
            </p>
        );
    }
}

export default Progress;

