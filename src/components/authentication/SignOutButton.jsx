import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOut } from 'redux-oauth';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    userSignedIn: PropTypes.bool.isRequired
};

class OAuthButton extends Component {
    handleClick = () => {
        const { dispatch } = this.props;

        dispatch(signOut());
    };
    render () {
        const { userSignedIn } = this.props;

        if (!userSignedIn) {
            return null;
        }

        return <button onClick={this.handleClick}>Sign out</button>;
    }
}

OAuthButton.propTypes = propTypes;

function mapStateToProps (state) {
    return { userSignedIn: state.auth.getIn(['user', 'isSignedIn']) };
}

export default connect(mapStateToProps)(OAuthButton);
