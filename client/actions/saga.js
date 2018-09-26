import { GET_SCENARIO, UPDATE_SCENARIO,SAVE_SCENARIO } from './types.js'

export const getScenario = () => {
  return{
    type: GET_SCENARIO
  }
};

export const updateScenario = (data) => {
  return {
    type: UPDATE_SCENARIO,
    data: data
  }
};

export const saveScenario = () => {
  return {
    type: SAVE_SCENARIO
  }
};
