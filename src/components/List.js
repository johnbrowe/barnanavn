import React, { Component } from 'react';
import './../App.css';
import { CSSTransitionGroup } from 'react-transition-group'

class App extends Component {

  constructor(props) {
    super(props);

    // Bindings
    this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this);
    
  }

  noneSelectedYetMsg(){
    if(this.props.accepted.length == 0){
      return "Onki navn"    
    } else {
      return "";
    }
  }
  
  render(){
    return (
      <div>
          <ul>    
          <li><b>Nøvn:</b></li>
          {this.noneSelectedYetMsg()}
          
        {this.props.accepted.map((data, i) => {

              return <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={900}><li key={data.id}>
                  {data.name}
                </li>
              </CSSTransitionGroup>
            })}
            </ul>
      </div> 
    );
  }
}

export default App;
