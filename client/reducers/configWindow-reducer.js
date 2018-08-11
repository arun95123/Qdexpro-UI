import {
  TEXTAREA_EXPAND
} from '../actions/types'

const initialState = {
  textAreaExpand: false
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case TEXTAREA_EXPAND: {
      console.log('*****');
      const {textAreaExpand} = {...state};
      var newState = !textAreaExpand;
      return {
        ...state,
        textAreaExpand: newState
      };
      break;
    }
  }
      return state;
}
