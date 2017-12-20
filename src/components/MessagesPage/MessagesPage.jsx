import './MessagesPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMessages} from '../../redux/actions/messagesAction';
import SignOutButton from '../authentication/SignOutButton';

class MessagesPage extends Component {
    componentWillMount () {
        this.props.getMessages();
    }
    render () {
        return (
            <div>
                <span>Messages page content</span>
                <ul>
                    {
                        this.props.messages.map((message) =>
                            <li key={message.message_id}>{message.adress}</li>
                        )
                    }
                </ul>
                <SignOutButton/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        messages: state.messages
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getMessages: () => dispatch(getMessages())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
