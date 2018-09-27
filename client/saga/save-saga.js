import {takeEvery,select, put, call} from 'redux-saga/effects';
import {GET_SCENARIO,SAVE_SCENARIO} from '../actions/types';
import { getScenarioData } from '../api/scenario';

export const saveScenario = function* () {
  try {
    const state = yield select();
    console.log(state);
    var requestObj = {};
    var setup = {};
    var tearDown = {};
    var testCases = [];
    if(state.scenarioReducer.scenarioSetup)
    {
      setup.steps = state.stepReducer.scenarioSetupStep;
    }
    if(state.scenarioReducer.scenarioSetup)
    {
      tearDown.steps = state.stepReducer.scenarioTearDownStep;
    }
    if(state.testcaseReducer.testCases)
    {
      for(var i=0;i<state.testcaseReducer.testCases.length;i++)
      {
        let setup = {};
        let tearDown = {};
        let steps = [];
        if(state.testcaseReducer.testCases[i].showTestCaseSetup)
        {
           setup.steps = state.testcaseReducer.testCases[i].testCaseSetupStep;
        }
        if(state.testcaseReducer.testCases[i].showTestCaseTearDown)
        {
          tearDown.steps = state.testcaseReducer.testCases[i].testCaseTearDownStep;
        }
        if(state.testcaseReducer.testCases[i].testCaseTestStep)
        {
          steps = state.testcaseReducer.testCases[i].testCaseTestStep;
        }
        testCases.push({
          setup,
          tearDown,
          steps
        })
      }
    }
    requestObj = {setup,tearDown,testCases};
    console.log(requestObj);
  }
  catch(error){
    //HANDLE ERROR HERE
  }
};

export default function* saveSaga() {
  yield takeEvery(SAVE_SCENARIO, saveScenario);
}
