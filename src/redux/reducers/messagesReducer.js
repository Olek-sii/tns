import {START_RECEIVING_MESSAGES, SUCCESS_RECEIVING_MESSAGES, FAIL_RECEIVING_MESSAGES,
    START_UPDATING_MESSAGE, SUCCESS_UPDATING_MESSAGE, FAIL_UPDATING_MESSAGE
} from '../actions/messagesAction';

export default function (state = [], action) {
    switch (action.type) {
    case START_RECEIVING_MESSAGES:
        return state;
    case SUCCESS_RECEIVING_MESSAGES:
        return action.payload;
    case FAIL_RECEIVING_MESSAGES:
        return action.payload;
    case START_UPDATING_MESSAGE:
        return state;
    case SUCCESS_UPDATING_MESSAGE:
        return state.map((message) =>
            message.message_id === action.payload.message_id ? action.payload : message);
    case FAIL_UPDATING_MESSAGE:
        return action.payload;
    default:
        return state;
    }
}
