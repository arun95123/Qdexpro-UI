import { combineReducers } from 'redux';
import reducerOne from './reducer-one';
import reducerTwo from './reducer-two';
import scenarioReducer from './scenario-reducer'
import testcaseReducer from './testcase-reducer'

export const reducers = {
  reducerOne: reducerOne,
  reducerTwo: reducerTwo,
  scenarioReducer : scenarioReducer,
  testcaseReducer: testcaseReducer
};

export default combineReducers(reducers);
