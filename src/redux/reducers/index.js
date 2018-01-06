import { authStateReducer } from 'redux-oauth';
import {combineReducers} from 'redux';
import markers from './markersReducer';
import messages from './messagesReducer';

const reducer = combineReducers({
    auth: authStateReducer,
    messages,
    markers
});

export default reducer;
