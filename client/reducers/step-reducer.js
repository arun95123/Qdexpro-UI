import {
  ADD_STEP,REMOVE_STEP
} from '../actions/types'
import testcaseReducer from './testcase-reducer'

const initialState = {
  scenarioSetupStep: [],
  scenarioTearDownStep: []
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_STEP: {
      if(action.title ==='Setup' && action.isTestCase ==='false' )
      {
      const {scenarioSetupStep} = {...state};
      var newSetupStep = scenarioSetupStep.concat({
        name: 'SetupStep'
      });
      return{
        ...state,
        scenarioSetupStep: newSetupStep
      };
    }
    else if(action.title ==='TearDown' && action.isTestCase ==='false')
    {
    const {scenarioTearDownStep} = {...state};
    var newTearDownStep = scenarioTearDownStep.concat({
      name: 'TearDownStep'
    });
    return{
      ...state,
      scenarioTearDownStep: newTearDownStep
     };
    }
      break;
   }
   case REMOVE_STEP:
   {
     if(action.title ==='Setup' && action.isTestCase ==='false' )
     {
       console.log(action.index)
     const {scenarioSetupStep} = {...state};
     var newSetupStep = scenarioSetupStep.slice();
     newSetupStep.splice(action.index,1);
     return{
       ...state,
       scenarioSetupStep: newSetupStep
     };
   }
   else if(action.title ==='TearDown' && action.isTestCase ==='false')
   {
   const {scenarioTearDownStep} = {...state};
   var newTearDownStep = scenarioTearDownStep.slice();
   newTearDownStep.splice(action.index,1);
   return{
     ...state,
     scenarioTearDownStep: newTearDownStep
    };
   }
     break;
   }
  }
  return state;
}
