import { combineReducers } from 'redux';
import reducerOne from './reducer-one';
import reducerTwo from './reducer-two';
import scenarioReducer from './scenario-reducer'
import testcaseReducer from './testcase-reducer'
import stepReducer from './step-reducer'

export const reducers = {
  reducerOne: reducerOne,
  reducerTwo: reducerTwo,
  scenarioReducer : scenarioReducer,
  testcaseReducer: testcaseReducer,
  stepReducer: stepReducer
};

export default combineReducers(reducers);
