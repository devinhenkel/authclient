import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from '../reducers/auth';

const rootReducer = combineReducers({
  form, 
  auth: authReducer
});


export default rootReducer;
