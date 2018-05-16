const reducerOne = (state = [], action) => {
  switch(action.type){
    case 'ACTION_ONE':{
      return action.data;
    }
    default:
        return state;
  }
};

export default reducerOne;
