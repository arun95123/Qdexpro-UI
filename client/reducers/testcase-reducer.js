import {
  TESTCASE_SETUPTEARDOWN_HEIGHT,
  ADD_TESTCASE,
  ADD_STEP
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
      const {testCases} = {...state};
      var newTestCases = testCases.concat({
        name: 'testCase',
        testCaseSetupHeight: 0,
        testCaseTearDownHeight: 0,
        testCaseSetupStep: [],
        testCaseTearDownStep: []
      });
      return{
        ...state,
        testCases: newTestCases
      };
      break;
    }
    case ADD_STEP:{
      if (action.title ==='Setup' && action.isTestCase)
      {
        const {testCases} = {...state};
        const {testCaseSetupStep} = {...testCases};
        console.log(testCaseSetupStep);
        var newSetupStep =  testCases[action.index].testCaseSetupStep.concat({
          name: 'TestCaseSetupStep'
          });
        console.log('newStep',newSetupStep)
       return{
         ...state,
         testCases: newSetupStep
       };
      }
      else if (action.title ==='Tear Down' && action.isTestCase)
      {
        var newTearDownStep =  testCases[action.index].testCaseTearDownStep.concat({
          name: 'TestCaseSetupStep'
          });
        return{
          ...state,
          testCases: newTearDownStep
      };
      }
      break;
    }
  }
  return state;
}
