import {
  TEXTAREA_EXPAND,SAVE_STEP
} from '../actions/types'

const initialState = {
  textAreaExpand: false,
  stepConfig: {}
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case TEXTAREA_EXPAND: {
      const {textAreaExpand} = {...state};
      var newState = !textAreaExpand;
      return {
        ...state,
        textAreaExpand: newState
      };
      break;
    }
    case SAVE_STEP: {
      const {stepConfig} = {...state};
      console.log(stepConfig)
      stepConfig[action.name] = action.data;
      return {
        ...state,
        stepConfig : stepConfig
      };
      break;
    }
  }
      return state;
}
