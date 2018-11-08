import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN,SHOW_SCENARIO_TESTCASE,ADD_STEP,REMOVE_SETUP_TEARDOWN
} from '../actions/types'

const initialState = {
  scenarioSetup: false,
  scenarioTearDown: false
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
    }
      break;
  }
      return state;
}
