import './App.scss';
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MapPage from '../MapPage';
import ProtectedBlock from '../ProtectedBlock';
import RoutePlannerBlock from '../RoutePlannerBlock';

export default class App extends Component {
    render () {
        return (
            <div className='app'>
                <div className="linksContainer">
                    <div className='linkWrapper'>
                        <Link to='/messages'><button>Messages</button></Link>
                    </div>
                    <div className='linkWrapper'>
                        <Link to='/'><button>RoutePlanner</button></Link>
                    </div>
                    <div className='linkWrapper'>
                        <Link to='/map'><button>Map</button></Link>
                    </div>
                </div>
                <Switch>
                    <Route path='/messages' component={ProtectedBlock} />
                    <Route path='/map' component={MapPage} />
                    <Route path='/' component={RoutePlannerBlock} />
                </Switch>
            </div>
        );
    }
}
