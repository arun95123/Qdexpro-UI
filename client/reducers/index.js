import { combineReducers } from 'redux';
import scenarioReducer from './scenario-reducer'
import testcaseReducer from './testcase-reducer'
import stepReducer from './step-reducer'
import configWindowReducer from './configWindow-reducer'
import classMapperReducer from './classMapper-reducer'
import { reducer as reduxFormReducer } from 'redux-form';

export const reducers = {
  scenarioReducer : scenarioReducer,
  testcaseReducer: testcaseReducer,
  stepReducer: stepReducer,
  configWindowReducer: configWindowReducer,
  classMapperReducer: classMapperReducer,
  form: reduxFormReducer,
};

export default combineReducers(reducers);
