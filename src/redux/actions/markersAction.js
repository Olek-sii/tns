export const ADD_MARKER = 'ADD_MARKER';
export const REMOVE_MARKER = 'REMOVE_MARKER ';

export function toggleSearchPoint (payload, value) {
    if (value) {
        return addSearchPoint(payload);
    }
    return removeSearchPoint(payload);
}

export function addSearchPoint (payload) {
    return { type: ADD_MARKER, payload: payload };
}

export function removeSearchPoint (payload) {
    return { type: REMOVE_MARKER, payload: payload };
}
