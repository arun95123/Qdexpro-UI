import { combineReducers } from 'redux';
import reducerOne from './reducer-one';
import reducerTwo from './reducer-two';

export const reducers = {
  reducerOne: reducerOne,
  reducerTwo: reducerTwo
};

export default combineReducers(reducers);
