import {
  TESTCASE_SETUPTEARDOWN_HEIGHT,
  ADD_TESTCASE,
  ADD_STEP,
  ADD_TESTCASESTEP,
  REMOVE_TESTCASE,
  SHOW_TESTCASE_SETUP,
  SHOW_TESTCASE_TEARDOWN,
  REMOVE_SETUP_TEARDOWN,
  REMOVE_STEP,
  UPDATE_SCENARIO,
  SHOW_TESTCASE_SETUPTEARDOWN,
  SAVE_TESTCASE_NAME
} from '../actions/types'


const initialState = {
  testCases: []
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
   case UPDATE_SCENARIO: {
     var newTestCases = [];
     var i;
     for(i=0; i<action.data.testCases.length; i++)
      {
        let tearDown=false;
        let setup=false;
        let updatedtestCaseSetupStep=[];
        let updatedtestCaseTearDownStep=[];
        if(action.data.testCases[i].setup){
          updatedtestCaseSetupStep=action.data.testCases[i].setup.steps;
          setup=true;
        }
        if(action.data.testCases[i].tearDown){
          updatedtestCaseTearDownStep=action.data.testCases[i].tearDown.steps;
          tearDown=true;
        }
        let updatedtestCaseTeststep=action.data.testCases[i].steps;
        newTestCases.push({
          name: 'testCase',
          testCaseSetupHeight: 0,
          testCaseTearDownHeight: 0,
          testCaseSetupStep: updatedtestCaseSetupStep,
          testCaseTearDownStep: updatedtestCaseTearDownStep,
          showTestCaseSetup: setup,
          showTestCaseTearDown: tearDown,
          testCaseTestStep: updatedtestCaseTeststep
        })
      }
      return {
        ...state,
        testCases: newTestCases
      };
      break;
    }
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

      case SAVE_TESTCASE_NAME: {
        const{testCases}={...state};
        testCases[action.index].name= action.name;
        console.log(testCases[action.index].name)
        return{
          ...state,
          testCases: testCases
        };
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

    case SHOW_TESTCASE_SETUPTEARDOWN:{
      if (action.data ==='Setup')
      {
        const {testCases} = {...state};
        testCases[action.index].showTestCaseSetup = true;
        return{
         ...state,
         testCases : testCases
        };
      }
      else if (action.data ==='TearDown')
      {
        const {testCases} = {...state};
        testCases[action.index].showTestCaseTearDown = true;
        return{
         ...state,
         testCases : testCases
        };
      }
      break;
    }
    case ADD_TESTCASE: {
      const {testCases} = {...state};
      var len = testCases.length;
      var newTestCases = testCases.concat({
        name: 'testCase'+ len,
        testCaseSetupHeight: 0,
        showTestCaseSetup: false,
        showTestCaseTearDown: false,
        testCaseTearDownHeight: 0,
        testCaseSetupStep: [],
        testCaseTearDownStep: [],
        testCaseTestStep: [],
        showTestCaseSetup: false,
        showTestCaseTearDown: false
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
      console.log("**");
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
        var len = newTestCases[action.index].testCaseSetupStep.length;
        var newSetupStep = newTestCases[action.index].testCaseSetupStep.concat({
          stepName: 'TestCaseSetupStep'+len,
          idType: '3',
          controlType: 'Button',
          waitTime: '2'
        });
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
        var len = newTestCases[action.index].testCaseTearDownStep.length;
        var newTearDownStep = newTestCases[action.index].testCaseTearDownStep.concat({
          stepName: 'TestCaseTearDownStep'+len,
          idType: '3',
          controlType: 'Button',
          waitTime: '2'
        });
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
      var len = newTestCases[action.index].testCaseTestStep.length;
      var newTestCaseStep = newTestCases[action.index].testCaseTestStep.concat({
        stepName: 'TestCaseStep'+len,
        idType: '3',
        controlType: 'Button',
        waitTime: '2'
      });
      newTestCases[action.index].testCaseTestStep = newTestCaseStep
      return{
        ...state,
        testCases : newTestCases
        };
      break;
    }
  }
  return state;
}
