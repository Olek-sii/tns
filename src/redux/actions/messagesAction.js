import { fetch, parseResponse, getHeaders } from 'redux-oauth';
import { apiUrl } from '../../url';

export const START_RECEIVING_MESSAGES = 'START_RECEIVING_MESSAGES';
export const SUCCESS_RECEIVING_MESSAGES = 'SUCCESS_RECEIVING_MESSAGES';
export const FAIL_RECEIVING_MESSAGES = 'FAIL_RECEIVING_MESSAGES';

export const START_UPDATING_MESSAGE = 'START_UPDATING_MESSAGE';
export const SUCCESS_UPDATING_MESSAGE = 'SUCCESS_UPDATING_MESSAGE';
export const FAIL_UPDATING_MESSAGE = 'FAIL_UPDATING_MESSAGE';

export function getMessages () {
    return (dispatch) => {
        dispatch(startReceivingMessages());

        return dispatch(fetch(apiUrl + '/messages'))
            .then(parseResponse)
            .then((payload) => {
                dispatch(successReceivingMessages(payload));
            })
            .catch((error) => {
                dispatch(failReceivingMessages(error));
            });
    };
}

export function updateMessage (id, isDone) {
    console.log(id, isDone);
    return (dispatch, getState) => {
        dispatch(startUpdatingMessage());
        let headers = getHeaders(getState());
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
        return dispatch(fetch(apiUrl + '/messages/' + id, {
            method: 'PATCH',
            body: JSON.stringify({message: {is_done: isDone}}),
            headers: headers
        })).then(parseResponse)
            .then((payload) => {
                console.log(payload);
                dispatch(successUpdatingMessage(payload));
            })
            .catch((error) => {
                console.log(error);
                dispatch(failUpdatingMessage(error));
            });
    };
}

export function startReceivingMessages () {
    return { type: START_RECEIVING_MESSAGES };
}

export function successReceivingMessages (payload) {
    return { type: SUCCESS_RECEIVING_MESSAGES, payload: payload };
}

export function failReceivingMessages (error) {
    return { type: FAIL_RECEIVING_MESSAGES, payload: error };
}

export function startUpdatingMessage () {
    return { type: START_UPDATING_MESSAGE };
}

export function successUpdatingMessage (payload) {
    return { type: SUCCESS_UPDATING_MESSAGE, payload: payload };
}

export function failUpdatingMessage (error) {
    return { type: FAIL_UPDATING_MESSAGE, payload: error };
}
