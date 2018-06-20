import { connect } from 'react-redux';
import { showScenarioSetup,showScenarioTearDown,showScenarioTestCase } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioSetup,
    scenarioTearDown: state.scenarioTearDown,
    scenarioTestCase: state.scenarioTestCase
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
