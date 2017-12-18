import './ProtectedBlock.scss';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MessagesPage from '../MessagesPage';

class ProtectedBlock extends Component {
    isLoggedIn = () => true;
    render () {
        if (this.props.match.isExact && this.isLoggedIn()) {
            return <Redirect to='messages/login' />;
        }
        return (
            <div>
                <span>Protected messages page header</span><br/>
                <Switch>
                    <Route path='/messages/login' render={() => <span>Login btn</span>} />
                    <Route path='/messages' component={MessagesPage}/>
                </Switch>
            </div>
        );
    }
}

export default ProtectedBlock;
