import { connect } from 'react-redux'
import { getScenario } from '../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioReducer.scenarioSetup,
    scenarioTearDown: state.scenarioReducer.scenarioTearDown,
    testCases: state.testcaseReducer.testCases
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getScenario: () => dispatch(getScenario())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
