import { authStateReducer } from 'redux-oauth';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    auth: authStateReducer
});

export default reducer;
