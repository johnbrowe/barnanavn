import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SelectGender from "./components/SelectGender";
import Restart from "./components/Restart";
import Action from "./components/Action.js";
import AcceptedList from "./components/AcceptedList";
import RejectedList from "./components/RejectedList";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import store from "./store";
import { restart } from "./actions/name-actions";
import { selectGender } from "./actions/gender-actions";

class App extends Component {
  componentDidMount() {
    if (!this.props.gender.selected) {
      store.dispatch(restart());
      store.dispatch(selectGender(null));
      localStorage.clear();
      this.props.history.push("/");
    } else {
      store.dispatch(selectGender(this.props.gender.selected));
      this.props.history.push("/navn");
    }
  }

  render() {
    return (
      <div className="App">
        <Restart />
        <div className="action-container">
          <div className="action-box">
            <Switch>
              <Route exact path="/" component={SelectGender} />
              <Route exact path="/navn" component={Action} />
              <Route exact path="/nei" component={RejectedList} />
              <Route exact path="/ja" component={AcceptedList} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    gender: store.gender
  };
};

export default withRouter(connect(mapStateToProps)(App));
