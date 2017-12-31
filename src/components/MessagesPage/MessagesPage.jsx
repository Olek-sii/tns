import './MessagesPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailedMessage from '../DetailedMessage';
import {getMessages} from '../../redux/actions/messagesAction';
import Message from '../Message';
import SignOutButton from '../authentication/SignOutButton';

class MessagesPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            detailedMessage: null
        };
    }
    componentWillMount () {
        this.props.getMessages();
    }
    handleSetDetailedMessage = (message) => {
        this.setState({detailedMessage: message});
    }
    render () {
        return (
            <div>
                <SignOutButton/>
                <div className='messages-page'>
                    <div className="messages">
                        {this.props.messages.map((message) =>
                            <div key={message.message_id}>
                                <Message
                                    message={message}
                                    setDetailed = {this.handleSetDetailedMessage}
                                />
                            </div>
                        )}
                    </div>
                    <div className="message-expand">
                        {this.state.detailedMessage &&
                        <DetailedMessage message={this.state.detailedMessage}/>}
                    </div>
                </div>
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
