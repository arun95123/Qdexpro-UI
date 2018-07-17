import {
  ADD_STEP
} from './types'

export const addStep = (isTestCase, title) => {
  return{
    type: ADD_STEP,
    isTestCase: isTestCase,
    title: title,
  }
};
