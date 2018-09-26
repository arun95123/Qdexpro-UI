import { connect } from 'react-redux'
import { getScenario,saveScenario } from '../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioReducer.scenarioSetup,
    scenarioTearDown: state.scenarioReducer.scenarioTearDown,
    testCases: state.testcaseReducer.testCases
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getScenario: () => dispatch(getScenario()),
    saveScenario: () => dispatch(saveScenario())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
