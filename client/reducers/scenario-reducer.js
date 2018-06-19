import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN
} from '../actions/types'

const initialState = {
  scenarioSetup: false,
  scenarioTearDown : false
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
    }}
      return state;
  }
