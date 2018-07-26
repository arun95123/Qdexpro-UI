import {
  ADD_STEP
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
    else if(action.title ==='Tear Down' && action.isTestCase ==='false')
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
  }
  return state;
}
