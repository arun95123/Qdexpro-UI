import { combineReducers } from 'redux';
import scenarioReducer from './scenario-reducer'
import testcaseReducer from './testcase-reducer'
import stepReducer from './step-reducer'
import configWindowReducer from './configWindow-reducer'

export const reducers = {
  scenarioReducer : scenarioReducer,
  testcaseReducer: testcaseReducer,
  stepReducer: stepReducer,
  configWindowReducer: configWindowReducer
};

export default combineReducers(reducers);
