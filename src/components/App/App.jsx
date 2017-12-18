import './App.scss';
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MainPage from '../MainPage';
import ProtectedBlock from '../ProtectedBlock';
import RoutePlannerBlock from '../RoutePlannerBlock';

export default class App extends Component {
    render () {
        return (
            <div className='app'>
                <span>Main Header</span><br/>
                <Link to='/'>Main</Link>
                <Link to='/messages'>Messages</Link>
                <Link to='/planner'>RoutePlanner</Link>
                <Switch>
                    <Route path='/messages' component={ProtectedBlock} />
                    <Route path='/planner' component={RoutePlannerBlock} />
                    <Route path='/' component={MainPage} />
                </Switch>
            </div>
        );
    }
}
