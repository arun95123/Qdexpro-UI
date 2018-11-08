import {
  TESTCASE_SETUPTEARDOWN_HEIGHT,
  ADD_TESTCASE,
  ADD_STEP,
  ADD_TESTCASESTEP,
  REMOVE_TESTCASE,
  SHOW_TESTCASE_SETUP,
  SHOW_TESTCASE_TEARDOWN,
  REMOVE_SETUP_TEARDOWN,
  REMOVE_STEP
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
      else if(action.isTestCase==='true' && action.title==='TearDown'){
        testCases[action.index].testCaseTearDownHeight = action.height;
        return {
          ...state,
          testCases: testCases
        };
      }
      break;
    }

    case SHOW_TESTCASE_SETUP: {
      const {testCases} = {...state};
      testCases[action.index].showTestCaseSetup =true;
      return {
        ...state,
        testCases : testCases
      };
      break;
    }

    case SHOW_TESTCASE_TEARDOWN: {
      const {testCases} = {...state};
      testCases[action.index].showTestCaseTearDown = true;
      return {
        ...state,
        testCases : testCases
      };
      break;
    }

    case ADD_TESTCASE: {
      const {testCases} = {...state};
      var newTestCases = testCases.concat({
        name: 'testCase',
        testCaseSetupHeight: 0,
        showTestCaseSetup: false,
        showTestCaseTearDown: false,
        testCaseTearDownHeight: 0,
        testCaseSetupStep: [],
        testCaseTearDownStep: [],
        testCaseTestStep: []
      });
      return{
        ...state,
        testCases: newTestCases,
      };
      break;
    }
    case REMOVE_TESTCASE: {
      const {testCases} = {...state};
      var newTestCases = testCases.slice();
      newTestCases.splice(action.index,1);
      return{
        ...state,
        testCases: newTestCases
      }
      break;
    }
    case REMOVE_STEP: {

      if(action.title==='Testcase')
      {
      const {testCases} = {...state};
      var newTestCases = testCases.slice();
      newTestCases[action.testCaseindex].testCaseTestStep.splice(action.index,1);
      return{
        ...state,
        testCases: newTestCases
        }
      }
      else if(action.title==='Setup' && action.isTestCase==='true')
      {
      const {testCases} = {...state};
      var newTestCases = testCases.slice();
      newTestCases[action.testCaseindex].testCaseSetupStep.splice(action.index,1);
      return{
        ...state,
        testCases: newTestCases
        }
      }
      else if(action.title==='TearDown' && action.isTestCase==='true')
      {
      const {testCases} = {...state};
      var newTestCases = testCases.slice();
      newTestCases[action.testCaseindex].testCaseTearDownStep.splice(action.index,1);
      return{
        ...state,
        testCases: newTestCases
        }
      }
      break;
    }
    case REMOVE_SETUP_TEARDOWN: {
      if(action.title==='Setup' && action.isTestCase=== 'true' ){
        const {testCases} = {...state};
        var newTestCases = testCases.slice();
        newTestCases[action.index].showTestCaseSetup= false,
        newTestCases[action.index].testCaseSetupStep= []
        return {
          ...state,
        testCases: newTestCases
        }
      }
      if(action.title==='TearDown' && action.isTestCase=== 'true'){
        const {testCases} = {...state};
        var newTestCases = testCases.slice();
        newTestCases[action.index].showTestCaseTearDown= false,
        newTestCases[action.index].testCaseTearDownStep= []
        return {
          ...state,
          testCases: newTestCases
        }
      }
      break;
    }
    case ADD_STEP:{
      if (action.title ==='Setup' && action.isTestCase==='true')
      {
        const {testCases} = {...state};
        var newTestCases = testCases.slice();
        var newSetupStep = newTestCases[action.index].testCaseSetupStep.concat({name: 'TestCaseSetupStep'});
        newTestCases[action.index].testCaseSetupStep = newSetupStep
        return{
         ...state,
         testCases : newTestCases
        };
      }
      else if (action.title ==='TearDown' && action.isTestCase==='true')
      {
        const {testCases} = {...state};
        var newTestCases = testCases.slice();
        var newTearDownStep = newTestCases[action.index].testCaseTearDownStep.concat({name: 'TestCaseTearDownStep'});
        newTestCases[action.index].testCaseTearDownStep = newTearDownStep
        return{
          ...state,
          testCases : newTestCases
          };
        }
      break;
     }
    case ADD_TESTCASESTEP:{
      const {testCases} = {...state};
      var newTestCases = testCases.slice();
      var newTestCaseStep = newTestCases[action.index].testCaseTestStep.concat({name: 'TestCaseTestStep'});
      newTestCases[action.index].testCaseTestStep = newTestCaseStep
      return{
        ...state,
        testCases : newTestCases
        };
      }
    break;
  }
  return state;
}
