import {
  SHOW_SCENARIO_SETUP
} from '../actions/types'

const initialState = {
  scenarioSetup: false
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_SCENARIO_SETUP: {
      console.log('^^^^^^^^^^^^^^^^^^');
      return {
        ...state,
        scenarioSetup: true
      };
    }
    default:
      return state;
  }
}
