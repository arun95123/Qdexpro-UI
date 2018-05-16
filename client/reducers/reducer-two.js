const reducerTwo = (state = [], action) => {
  switch(action.type){
    case 'ACTION_TWO':{
      return action.data;
    }
    default:
        return state;
  }
};

export default reducerTwo;
