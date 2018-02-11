import { combineReducers } from 'redux';
import PaymentReducer from './PaymentReducer';

const rootReducer = combineReducers({
  payment: PaymentReducer
});

export default rootReducer;
