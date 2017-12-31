import './Message.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {updateMessage} from '../../redux/actions/messagesAction';

const propTypes = {
    message: PropTypes.object.isRequired
};

class Message extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    toggleIsExpanded = () => {
        this.setState({isExpanded: !this.state.isExpanded});
    };
    toggleIsDone = () => {
        let { message } = this.props;
        this.props.updateMessage(message.message_id, !message.is_done);
    };
    render () {
        let { message } = this.props;
        return (
            <div className='message'>
                <input type='checkbox' defaultChecked={message.is_done} onClick={this.toggleIsDone} />
                <button onClick={this.toggleIsExpanded}>expand</button>
                <span>{message.address}</span>
                {
                    this.state.isExpanded &&
                    <div className='message-expanded'>
                        <div>{message.message_id}</div>
                        {JSON.parse(message.times).map((time, k) => <div key={k}>{time}</div>)}
                        <div>End date: {message.end_date}</div>
                        <div>Price: {message.price}€</div>
                        <div>Test id: {message.test_id}</div>
                        <div>Check number: {message.check_number}</div>
                    </div>
                }
            </div>
        );
    }
}

Message.propTypes = propTypes;

function mapDispatchToProps (dispatch) {
    return {
        updateMessage: (id, isDone) => dispatch(updateMessage(id, isDone))
    };
}

export default connect(null, mapDispatchToProps)(Message);
