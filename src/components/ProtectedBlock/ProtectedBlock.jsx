import './ProtectedBlock.scss';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import MessagesPage from '../MessagesPage';
import OAuthButton from '../authentication/OAuthButton';

class ProtectedBlock extends Component {
    render () {
        if (this.props.match.isExact && !this.props.userSignedIn) {
            return <Redirect to='messages/login' />;
        }
        return (
            <Switch>
                <Route path='/messages/login' render={() => <OAuthButton provider='google'/>}/>
                <Route path='/messages' component={MessagesPage}/>
            </Switch>
        );
    }
}

function mapStateToProps (state, ownProps) {
    const loading = state.auth.getIn(['oAuthSignIn', ownProps.provider, 'loading']) || false;

    return { userSignedIn: state.auth.getIn(['user', 'isSignedIn']), loading };
}

export default connect(mapStateToProps)(ProtectedBlock);
