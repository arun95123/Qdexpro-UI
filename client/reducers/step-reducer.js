import {
  ADD_STEP
} from '../actions/types'

const initialState = {
  scenarioSetupStep: [],
  scenarioTearDownStep: []
};

//change to es6
export default function(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case ADD_STEP: {
      if(action.title ==='Setup' && !action.isTestCase )
      {
        console.log(action)
      const {scenarioSetupStep} = {...state};
      var newSetupStep = scenarioSetupStep.concat({
        name: 'SetupStep'
      });
      return{
        ...state,
        scenarioSetupStep: newSetupStep
      };
    }
    else if(action.title ==='Tear Down' && !action.isTestCase)
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
