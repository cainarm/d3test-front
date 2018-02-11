import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function paymentReducer(state = initialState.paymentReducer, action) {
    switch (action.type) {
        case types.ADD_PAYMENT_DATA: 
            state =  Object.assign({} ,state, {paymentData : action.payload});
            console.log(state);
        break;
        case types.SET_VALID: 
            state = Object.assign({} ,state, {valid: action.payload});
            console.log(state);
        break;
    }
    return state;
}
