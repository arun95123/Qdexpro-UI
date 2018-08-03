import {
  TESTCASE_SETUPTEARDOWN_HEIGHT,
  ADD_TESTCASE,
  ADD_TESTCASESTEP
} from './types'

export const testCaseSetupteardownHeight = (isTestCase, title, height, index) => {
  return {
    type: TESTCASE_SETUPTEARDOWN_HEIGHT,
    isTestCase: isTestCase,
    title: title,
    height: height,
    index: index
  };
}

export const addTestCase = () => {
  return{
    type: ADD_TESTCASE
  }
}

export const addTestCaseStep = (index) => {
  return{
    type: ADD_TESTCASESTEP,
    index: index
  }
}
