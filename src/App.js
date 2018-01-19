import React, { Component } from 'react';
import { createStore } from 'redux'
import './App.css';
import { connect } from 'react-redux';
import SelectGender from './components/SelectGender';
import Info from './components/Info';
import Action from './components/Action';
import AcceptedList from './components/AcceptedList';
import RejectedList from './components/RejectedList';
import { withRouter } from 'react-router';
import GlobalMenu from './components/GlobalMenu';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <GlobalMenu/>
                <div className="action-container">
                    <div className="action-box">
                        <Switch>
                            <Route exact path='/' component={SelectGender}/>
                            <Route exact path='/navn' component={Action}/>
                            <Route exact path='/nei' component={RejectedList}/>
                            <Route exact path='/ja' component={AcceptedList}/>
                            <Route exact path='/info' component={Info}/>
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
