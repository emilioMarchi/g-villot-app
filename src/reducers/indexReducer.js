// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Agrega más reductores si los tienes
});

export default rootReducer;
    