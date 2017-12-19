import './MessagesPage.scss';
import React, { Component } from 'react';
import SignOutButton from '../authentication/SignOutButton';

class MessagesPage extends Component {
    render () {
        return (
            <div>
                <span>Messages page content</span>
                <SignOutButton/>
            </div>
        );
    }
}

export default MessagesPage;
