import * as types from './actionTypes';

export const addPaymentData = (data) => ({
  type: types.ADD_PAYMENT_DATA,
  payload: data
});

export const setValid = (valid) => ({
  type: types.SET_VALID,
  payload: valid
});
