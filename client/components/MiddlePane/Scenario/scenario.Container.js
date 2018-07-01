import { connect } from 'react-redux';
import { showScenarioSetup,showScenarioTearDown,addTestCase } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioReducer.scenarioSetup,
    scenarioTearDown: state.scenarioReducer.scenarioTearDown,
    testCases: state.testcaseReducer.testCases
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showScenarioSetup: () => dispatch(showScenarioSetup()),
    showScenarioTearDown: () => dispatch(showScenarioTearDown()),
    addTestCase: () => dispatch(addTestCase())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
