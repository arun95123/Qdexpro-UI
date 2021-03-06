import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN,SHOW_SCENARIO_TESTCASE,ADD_STEP,REMOVE_SETUP_TEARDOWN,UPDATE_SCENARIO,SAVE_SCENARIO_NAME
} from '../actions/types'

const initialState = {
  scenarioSetup: false,
  scenarioTearDown: false,
  scenarioName: 'Scenario'
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SCENARIO: {
      let scenarioSetup = false;
      let scenarioTearDown = false;
      let scenarioSetupSteps = [];
      let scenarioTearDownSteps= [];
      if(action.data.setup) {
        scenarioSetup = true;
        scenarioSetupSteps = action.data.setup.steps;
      }
      if(action.data.tearDown) {
        scenarioTearDown = true;
        scenarioTearDownSteps = action.data.tearDown.steps;
      }
      return {
        ...state,
        scenarioSetup: scenarioSetup,
        scenarioTearDown: scenarioTearDown,
      };
      break;
    }
    case SAVE_SCENARIO_NAME: {
      const{scenarioName}={...state};
      console.log(scenarioName);
      return{
        ...state,
        scenarioName: action.name
      }
    }
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
    case REMOVE_SETUP_TEARDOWN: {
      if(action.title==='Setup' &&  action.isTestCase=== 'false'){
        return {
          ...state,
          scenarioSetup: false
        }
      }
      if(action.title==='TearDown' &&  action.isTestCase=== 'false'){
        return {
          ...state,
          scenarioTearDown: false
        }
      }
      break;
    }
  }
  return state;
}
