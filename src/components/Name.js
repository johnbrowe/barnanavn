import React, { Component } from 'react';
import { connect } from 'react-redux';
import posed from 'react-pose';

const Box = posed.div({
  visible: { opacity: 1, transition: { duration: 500 } },
  hidden: { opacity: 0, transition: { duration: 0 }}
});

class Name extends Component {

  state = { isVisible: false };

  componentWillReceiveProps() {
    this.setState({ isVisible: false });
    
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 1);
  }

  isFinished() {
    return (this.props.names[this.props.gender.selected].index + 1) > this.props.names[this.props.gender.selected].length
  }

  showName() {
    if (!this.isFinished()) {
      return this.props.names[this.props.gender.selected][this.props.names.index].name
    } else {
      return "Onki navn eftir"
    }
  }

  showID() {
    if (!this.isFinished()) {
      return this.props.names[this.props.gender.selected][this.props.names.index].id
    } else {
      return "Onki navn eftir"
    }
  }

  render() {
    return (
      <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'} >
        <h1 className="display-name" key={this.showID()}>{this.showName()}</h1>
      </Box>
    );
  }
}


const mapStateToProps = function (store) {

  return {
    names: store.names,
    gender: store.gender
  };
}

export default connect(mapStateToProps)(Name);
