import {
  SHOW_SCENARIO_SETUP,SHOW_SCENARIO_TEARDOWN,ADD_STEP
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
