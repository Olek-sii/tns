import {ADD_MARKER, REMOVE_MARKER} from '../actions/markersAction';

export default function (state = [], action) {
    switch (action.type) {
    case ADD_MARKER:
        return [...state, action.payload];
    case REMOVE_MARKER:
        return state.filter(i => i.address !== action.payload.address);
    default:
        return state;
    }
}
