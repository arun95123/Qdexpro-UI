import {
  TESTCASE_SETUPTEARDOWN_HEIGHT,
  ADD_TESTCASE
} from '../actions/types'

const initialState = {
  testCases: []
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case TESTCASE_SETUPTEARDOWN_HEIGHT: {
      const {testCases} = {...state};
      if(action.isTestCase==='true' && action.title==='Setup'){
        testCases[action.index].testCaseSetupHeight = action.height;
        return {
          ...state,
          testCases: testCases
        };
      }
      else if(action.isTestCase && action.title==='TearDown'){
        testCases[action.index].testCaseTearDownHeight = action.height;
        return {
          ...state,
          testCases: testCases
        };
      }
      break;
    }
    case ADD_TESTCASE: {
      const {testCases: testCase} = {...state};
      var newTestCases = testCase.concat({
        name: 'testCase',
        testCaseSetupHeight: 0,
        testCaseTearDownHeight: 0
      });
      return{
        ...state,
        testCases: newTestCases
      };
      break;
    }
  }
  return state;
}
