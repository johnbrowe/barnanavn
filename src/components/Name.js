import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class Name extends Component {

  constructor(props) {
    super(props);

    // Bindings
  }

  
  render(){
      return (
          <div>
              <ReactCSSTransitionReplace
                  transitionName="fade-wait"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>
                  <h1 className="title" key={this.props.id}>{this.props.name}</h1>
              </ReactCSSTransitionReplace>
          </div>
      );
  }
}

export default Name;
