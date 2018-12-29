import { GET_SCENARIO, UPDATE_SCENARIO,SAVE_SCENARIO,GET_SCRIPT,SHOW_SCRIPT } from './types.js'

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

export const getScript = (data) => {
  return {
    type: GET_SCRIPT,
    data: data
  }
}

export const showScript = (data) => {
  return{
    type: SHOW_SCRIPT,
    data: data
  }
}
