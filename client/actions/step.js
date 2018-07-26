import {
  ADD_STEP
} from './types'

export const addStep = (isTestCase, title, index) => {
  return{
    type: ADD_STEP,
    isTestCase: isTestCase,
    title: title,
    index: index
  }
};
