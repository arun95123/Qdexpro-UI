import {takeEvery,select, put, call} from 'redux-saga/effects';
import {GET_SCENARIO,SAVE_SCENARIO} from '../actions/types';
import { postScenarioData } from '../api/scenario';

export const saveScenario = function* () {
  try {
    const state = yield select();
    console.log(state);
    var requestObj = {};
    var setup = {};
    var teardown = {};
    var testCase = [];
    if(state.scenarioReducer.scenarioSetup)
    {
      setup.step = state.stepReducer.scenarioSetupStep;
    }
    if(state.scenarioReducer.scenarioSetup)
    {
      teardown.step = state.stepReducer.scenarioTearDownStep;
    }
    if(state.testcaseReducer.testCases)
    {
      for(var i=0;i<state.testcaseReducer.testCases.length;i++)
      {
        let setup = {};
        let teardown = {};
        let step = [];
        if(state.testcaseReducer.testCases[i].showTestCaseSetup)
        {
           setup.step = state.testcaseReducer.testCases[i].testCaseSetupStep;
        }
        if(state.testcaseReducer.testCases[i].showTestCaseTearDown)
        {
          teardown.step = state.testcaseReducer.testCases[i].testCaseTearDownStep;
        }
        if(state.testcaseReducer.testCases[i].testCaseTestStep)
        {
          step = state.testcaseReducer.testCases[i].testCaseTestStep;
        }
        testCase.push({
          testCaseName: state.testcaseReducer.testCases[i].name,
          setup,
          teardown,
          step
        })
      }
    }
    requestObj = {scenarioName:'login',setup,teardown,testCase};
    console.log(requestObj);
    yield call(postScenarioData,requestObj);
  }
  catch(error){
    //HANDLE ERROR HERE
  }
};

export default function* saveSaga() {
  yield takeEvery(SAVE_SCENARIO, saveScenario);
}
