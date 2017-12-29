import './MessagesPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMessages} from '../../redux/actions/messagesAction';
import Message from '../Message';
import SignOutButton from '../authentication/SignOutButton';

class MessagesPage extends Component {
    componentWillMount () {
        this.props.getMessages();
    }
    render () {
        return (
            <div className='messages-page'>
                <ol>
                    {this.props.messages.map((message) =>
                        <li key={message.message_id}><Message message={message}/></li>
                    )}
                </ol>
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
