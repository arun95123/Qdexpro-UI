import {
  ADD_STEP,REMOVE_STEP,SAVE_STEP
} from './types'

export const addStep = (isTestCase, title, index) => {
  return{
    type: ADD_STEP,
    isTestCase: isTestCase,
    title: title,
    index: index
  }
};

export const removeStep = (isTestCase, title, index,testCaseindex) => {
  return{
    type: REMOVE_STEP,
    isTestCase: isTestCase,
    title: title,
    index: index,
    testCaseindex: testCaseindex
  }
};

export const saveStep = (name,data,isTestCase,title,index) => {
  return{
    type: SAVE_STEP,
    name: name,
    data: data,
    isTestCase: isTestCase,
    title: title,
    index: index
  }
}
