import {
  ADD_STEP,REMOVE_STEP,UPDATE_SCENARIO
} from '../actions/types'
import testcaseReducer from './testcase-reducer'

const initialState = {
  scenarioSetupStep: [],
  scenarioTearDownStep: []
};

//change to es6
export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SCENARIO: {
      let updatedSetupSteps = action.data.setup.steps;
      let updatedTeardownSteps = action.data.tearDown.steps;
      console.log('^^^^',updatedSetupSteps)
      return{
        ...state,
        scenarioSetupStep: updatedSetupSteps,
        scenarioTearDownStep: updatedTeardownSteps
      }
      break;
    }

    case ADD_STEP: {
      if(action.title ==='Setup' && action.isTestCase ==='false' )
      {
      const {scenarioSetupStep} = {...state};
      var newSetupStep = scenarioSetupStep.concat({
        stepName: 'SetupStep'
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
      stepName: 'TearDownStep'
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
