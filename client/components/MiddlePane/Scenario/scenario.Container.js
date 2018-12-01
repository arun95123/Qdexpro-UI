import { connect } from 'react-redux';
import { showScenarioSetup,showScenarioTearDown,addTestCase,addStep,saveScenarioName } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioReducer.scenarioSetup,
    scenarioTearDown: state.scenarioReducer.scenarioTearDown,
    testCases: state.testcaseReducer.testCases,
    scenarioSetupSteps: state.scenarioReducer.scenarioSetupSteps,
    scenarioTearDownSteps: state.scenarioReducer.scenarioTearDownSteps

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showScenarioSetup: () => dispatch(showScenarioSetup()),
    showScenarioTearDown: () => dispatch(showScenarioTearDown()),
    addTestCase: () => dispatch(addTestCase()),
    addStep:() => dispatch(addStep()),
    saveScenarioName:(name)=> dispatch(saveScenarioName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
