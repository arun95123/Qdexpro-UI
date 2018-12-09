import {
  ADD_STEP,REMOVE_STEP,UPDATE_SCENARIO,REMOVE_SETUP_TEARDOWN,SAVE_STEP
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
      var len = scenarioSetupStep.length;
      var newSetupStep = scenarioSetupStep.concat({
        stepName: 'SetupStep'+len,
        idType: '3',
        controlType: 'Button',
        waitTime: '2'
      });
      return{
        ...state,
        scenarioSetupStep: newSetupStep
      };
    }
    else if(action.title ==='TearDown' && action.isTestCase ==='false')
    {
    const {scenarioTearDownStep} = {...state};
    var len = scenarioTearDownStep.length;
    var newTearDownStep = scenarioTearDownStep.concat({
      stepName: 'TearDownStep'+len,
      idType: '3',
      controlType: 'Button',
      waitTime: '2'
    });
    return{
      ...state,
      scenarioTearDownStep: newTearDownStep
     };
    }
      break;
   }
   case REMOVE_STEP: {
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
     return {
       ...state,
       scenarioTearDownStep: newTearDownStep
        };
     }
       break;
    }
   case REMOVE_SETUP_TEARDOWN: {
     if(action.title==='Setup' &&  action.isTestCase=== 'false'){
       return {
         ...state,
         scenarioSetupStep: []
       }
     }
     if(action.title==='TearDown' &&  action.isTestCase=== 'false'){
       return {
         ...state,
         scenarioTearDownStep: []
       }
     }
     break;
   }
   case SAVE_STEP: {
     if(action.isTestCase ==='false' && action.title ==='Setup')
     {
       const {scenarioSetupStep} = {...state};
       console.log(scenarioSetupStep);
       scenarioSetupStep[action.index][action.name] = action.data;
       return {
         ...state,
         scenarioSetupStep : scenarioSetupStep
       };
     }
     break;
   }
  }
  return state;
}
