import {START_RECEIVING_MESSAGES, SUCCESS_RECEIVING_MESSAGES, FAIL_RECEIVING_MESSAGES} from '../actions/messagesAction';

export default function (state = [], action) {
    switch (action.type) {
    case START_RECEIVING_MESSAGES:
        return state;
    case SUCCESS_RECEIVING_MESSAGES:
        return action.payload;
    case FAIL_RECEIVING_MESSAGES:
        return action.payload;
    default:
        return state;
    }
}
