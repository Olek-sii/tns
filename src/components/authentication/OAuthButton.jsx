import React, { Component } from 'react';
import { connect } from 'react-redux';
import { oAuthSignIn } from 'redux-oauth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    provider: PropTypes.string.isRequired,
    userSignedIn: PropTypes.bool.isRequired
};

class OAuthButton extends Component {
    handleClick = () => {
        const { dispatch, provider } = this.props;

        dispatch(oAuthSignIn({ provider }));
    };
    render () {
        const { provider, userSignedIn } = this.props;

        if (userSignedIn) {
            return <Redirect to='/messages'/>;
        }

        return <button onClick={this.handleClick}>{provider}</button>;
    }
}

OAuthButton.propTypes = propTypes;

function mapStateToProps (state, ownProps) {
    const loading = state.auth.getIn(['oAuthSignIn', ownProps.provider, 'loading']) || false;

    return { userSignedIn: state.auth.getIn(['user', 'isSignedIn']), loading };
}

export default connect(mapStateToProps)(OAuthButton);
