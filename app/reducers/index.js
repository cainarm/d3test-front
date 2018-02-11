import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  count: counterReducer,
  form: reduxFormReducer
});

export default rootReducer;
