import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN,SHOW_SCENARIO_TESTCASE
} from '../actions/types'

const initialState = {
  scenarioSetup: false,
  scenarioTearDown: false,
  scenarioTestCase: false
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
    case SHOW_SCENARIO_TESTCASE: {
      return {
        ...state,
        scenarioTestCase: true
      };
      break;
    }
  }
      return state;
}
