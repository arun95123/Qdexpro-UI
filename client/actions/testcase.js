import {
  TESTCASE_SETUPTEARDOWN_HEIGHT
} from './types'

export const testCaseSetupteardownHeight = (isTestCase, title, height) => {
  return {
    type: TESTCASE_SETUPTEARDOWN_HEIGHT,
    isTestCase: isTestCase,
    title: title,
    height: height
  };
};
