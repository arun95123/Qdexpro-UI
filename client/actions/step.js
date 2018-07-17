import {
  ADD_STEP
} from './types'

export const addStep = (isTestCase, title) => {
  console.log("Action")
  return{
    type: ADD_STEP,
    isTestCase: isTestCase,
    title: title,
  }
};
