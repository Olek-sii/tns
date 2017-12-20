import { fetch, parseResponse } from 'redux-oauth';
import { apiUrl } from '../../url';

export const START_RECEIVING_MESSAGES = 'START_RECEIVING_MESSAGES';
export const SUCCESS_RECEIVING_MESSAGES = 'SUCCESS_RECEIVING_MESSAGES';
export const FAIL_RECEIVING_MESSAGES = 'FAIL_RECEIVING_MESSAGES';

export function getMessages () {
    return (dispatch) => {
        dispatch(startReceivingMessages());

        return dispatch(fetch(apiUrl + '/messages'))
            .then(parseResponse)
            .then((payload) => {
                console.log(payload);
                dispatch(successReceivingMessages(payload));
            })
            .catch((error) => {
                console.log(error);
                dispatch(failReceivingMessages(error));
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
