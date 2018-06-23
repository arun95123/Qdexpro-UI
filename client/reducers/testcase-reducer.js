import {
  TESTCASE_SETUPTEARDOWN_HEIGHT
} from '../actions/types'

const initialState = {
  testCaseSetupHeight: 0,
  testCaseTearDownHeight: 0
};

//change to es6
export default function(state = initialState, action) {

  switch(action.type) {
    case TESTCASE_SETUPTEARDOWN_HEIGHT: {
      if(action.isTestCase && action.title==='Setup'){
        return {
          ...state,
          testCaseSetupHeight: action.height
        };
      }
      else if(action.isTestCase && action.title==='TearDown'){
        return {
          ...state,
          testCaseTearDownHeight: action.height
        };
      }
      break;
    }
  }
  return state;
}
