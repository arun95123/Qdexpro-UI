import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN,SHOW_SCENARIO_TESTCASE,ADD_STEP
} from '../actions/types'

const initialState = {
  scenarioSetup: false,
  scenarioTearDown: false,
  scenarioTestCase: 0,
  scenarioSetupSteps: [],
  scenarioTearDownSteps: []
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_SCENARIO_SETUP: {
      return {
        ...state,
        scenarioSetup: true
      };
      break;
    }
    case SHOW_SCENARIO_TEARDOWN: {
      return {
        ...state,
        scenarioTearDown: true
      };
      break;
    }
    case ADD_STEP: {
      const {scenarioSetupSteps,scenarioTearDownSteps} = {...state};
      console.log("show")
      if(action.isTestCase===false && action.title==='Setup'){
        var newScenarioSetupSteps = scenarioSetupStep.concat({
          name: 'scenarioSetupStep'
          });
        return {

          ...state,
          scenarioSetupSteps: newScenarioSetupSteps
        };
      }
      else if(action.isTestCase===false && action.title==='TearDown'){
        var newScenarioTearDownSteps = scenarioTearDownSteps.concat({
          name: 'scenarioTearDownStep'
          });
        return {
          ...state,
          scenarioTearDownStep: newScenarioTearDownSteps
        };
      }
    }
  }
      return state;
}
