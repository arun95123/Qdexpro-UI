import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN,ADD_STEP,REMOVE_SETUP_TEARDOWN
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

export const removeSetupTearDown = (title) => {
  return {
    type: REMOVE_SETUP_TEARDOWN,
    title: title
  };
}
