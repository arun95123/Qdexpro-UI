import { connect } from 'react-redux';
import { showScenarioSetup,showScenarioTearDown } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioSetup,
    scenarioTearDown: state.scenarioTearDown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showScenarioSetup: () => dispatch(showScenarioSetup()),
    showScenarioTearDown: () => dispatch(showScenarioTearDown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
