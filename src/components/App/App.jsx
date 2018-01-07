import './App.scss';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import MapPage from '../MapPage';
import ProtectedBlock from '../ProtectedBlock';
import RoutePlannerBlock from '../RoutePlannerBlock';

export default class App extends Component {
    render () {
        return (
            <div className='app'>
                <Header />
                <Switch>
                    <Route path='/messages' component={ProtectedBlock} />
                    <Route path='/map' component={MapPage} />
                    <Route path='/' component={RoutePlannerBlock} />
                </Switch>
            </div>
        );
    }
}
