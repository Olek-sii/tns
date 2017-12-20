import { authStateReducer } from 'redux-oauth';
import {combineReducers} from 'redux';
import messages from './messagesReducer';

const reducer = combineReducers({
    auth: authStateReducer,
    messages
});

export default reducer;
