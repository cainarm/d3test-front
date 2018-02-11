import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function paymentReducer(state = initialState.paymentReducer, action) {
    switch (action.type) {
        case types.ADD_PAYMENT_DATA: 
            state = {
                ...state,
                paymentData : action.payload
            }
        break;
        case types.SET_VALID: 
            state = {
                ...state,
                valid: action.payload
            }
        break;
    }
    return state;
}
