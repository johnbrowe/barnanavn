import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SelectGender from './components/SelectGender';
import Info from './components/Info';
import Action from './components/Action';
import AcceptedList from './components/AcceptedList';
import RejectedList from './components/RejectedList';
import { Switch } from 'react-router-dom'
import { withRouter } from 'react-router';
import GlobalMenu from './components/GlobalMenu';
import CustomRoute from './components/CustomRoute.js';

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
                            <CustomRoute exact path='/' component={SelectGender}/>
                            <CustomRoute exact path='/navn' component={Action}/>
                            <CustomRoute exact path='/nei' component={RejectedList}/>
                            <CustomRoute exact path='/ja' component={AcceptedList}/>
                            <CustomRoute exact path='/info' component={Info}/>
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
