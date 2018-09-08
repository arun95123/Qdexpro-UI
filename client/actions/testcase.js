import {
  TESTCASE_SETUPTEARDOWN_HEIGHT,
  ADD_TESTCASE,
  ADD_TESTCASESTEP,
  REMOVE_TESTCASE,
  SHOW_TESTCASE_SETUP,
  SHOW_TESTCASE_TEARDOWN,
  SHOW_TESTCASE_SETUPTEARDOWN
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

export const showTestCaseSetup = (index) => {
  return{
    type: SHOW_TESTCASE_SETUP,
    index: index
  }
}

export const showTestCaseTearDown = (index) => {
  return{
    type: SHOW_TESTCASE_TEARDOWN,
    index: index
  }
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

export const removeTestCase = (index) => {
  return{
    type: REMOVE_TESTCASE,
    index: index
  }
}
export const showTestCaseSetupTearDown = (data,index) => {
  return{
    type: SHOW_TESTCASE_SETUPTEARDOWN,
    data: data,
    index: index
  }
}
