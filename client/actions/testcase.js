import {
  TESTCASE_SETUPTEARDOWN_HEIGHT,
  ADD_TESTCASE
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
};
