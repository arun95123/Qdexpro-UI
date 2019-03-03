import {
  SAVE_MAPPING
} from '../actions/types'

const initialState = {
  mappingList: []
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case SAVE_MAPPING: {
       const {mappingList} = {...state};
       mappingList[action.index] = action.data;
       return{
         ...state,
         mappingList: mappingList
       }
     }
  }
      return state;
}
