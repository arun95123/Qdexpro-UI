import {
  TEXTAREA_EXPAND,SHOW_SCRIPT
} from '../actions/types'

const initialState = {
  textAreaExpand: false,
  editorCode:'',
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
    case SHOW_SCRIPT: {
      return{
        ...state,
        editorCode: action.data.button
      };
      break;
    }
  }
      return state;
}
