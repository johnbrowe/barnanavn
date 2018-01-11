import React from 'react';
import { Route } from 'react-router-dom'
import store from './../store.js';
import { reEvaluate } from '../actions/menu-actions';

class CustomRoute extends Route {
    componentWillMount() {
        store.dispatch(reEvaluate());
    }

    render() {
        return (
            <Route exact path={this.props.path} component={this.props.component}/>
        );
    }
}

export default CustomRoute;
