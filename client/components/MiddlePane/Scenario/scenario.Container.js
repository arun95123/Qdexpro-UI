import { connect } from 'react-redux';
import { showScenarioSetup,showScenarioTearDown,showScenarioTestCase } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioReducer.scenarioSetup,
    scenarioTearDown: state.scenarioReducer.scenarioTearDown,
    scenarioTestCase: state.scenarioReducer.scenarioTestCase
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showScenarioSetup: () => dispatch(showScenarioSetup()),
    showScenarioTearDown: () => dispatch(showScenarioTearDown()),
    showScenarioTestCase: () => dispatch(showScenarioTestCase())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
