import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN,ADD_STEP,REMOVE_SETUP_TEARDOWN,SAVE_SCENARIO_NAME
} from './types'

export const showScenarioSetup = () => {
  return {
    type: SHOW_SCENARIO_SETUP
  };
};

export const showScenarioTearDown = () => {
  return {
    type: SHOW_SCENARIO_TEARDOWN
  };
};

export const removeSetupTearDown = (title,isTestCase,index) => {
  return {
    type: REMOVE_SETUP_TEARDOWN,
    title: title,
    isTestCase: isTestCase,
    index: index
  };
}

export const saveScenarioName = (name) => {
  return {
    type: SAVE_SCENARIO_NAME,
    name: name
  }
}
