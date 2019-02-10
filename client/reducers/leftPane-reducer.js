import {
  SAVE_SCENARIO,SAVE_SCENARIO_NAME
} from '../actions/types'

const initialState = {
  scenarioNamelist: []
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case SAVE_SCENARIO: {
      const {scenarioNamelist} = {...state};
      var len = scenarioNamelist.length;
      var newNamelist = scenarioNamelist.concat({
        scenarioName:'scenario 1'
      });
      return{
        ...state,
        scenarioNamelist: newNamelist
      };
    }
    }
  }

      return state;
}
