import './DetailedMessage.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {updateMessage} from '../../redux/actions/messagesAction';

const propTypes = {
    message: PropTypes.object.isRequired
};

class DetailedMessage extends Component {
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
                <div>{message.message_id}</div>
                <div className="message-caption">
                    <div className="message-caption-left">{message.address}</div>
                    <div className="message-caption-right">
                        <div>End date: {message.end_date}</div>
                        <div>Price: {message.price}€</div>
                    </div>
                </div>
                <div className="message-content">
                    <div className="message-times">
                        {JSON.parse(message.times).map((time, k) => <div key={k}>{time}</div>)}
                    </div>
                    <div className="message-testinfo">
                        <div>Test id: {message.test_id}</div>
                        <div>Check number: {message.check_number}</div>
                    </div>
                </div>
                <div className="message-controls">
                    <button className="message-set-done">Done</button>
                    <button className="message-mark">Mark</button>
                </div>
            </div>
        );
    }
}

DetailedMessage.propTypes = propTypes;

function mapDispatchToProps (dispatch) {
    return {
        updateMessage: (id, isDone) => dispatch(updateMessage(id, isDone))
    };
}

export default connect(null, mapDispatchToProps)(DetailedMessage);
