import { combineReducers } from 'redux';
import reducerOne from './reducer-one';
import reducerTwo from './reducer-two';
import scenarioReducer from './scenario-reducer'

export const reducers = {
  reducerOne: reducerOne,
  reducerTwo: reducerTwo,
  scenarioReducer : scenarioReducer
};

export default combineReducers(reducers);
