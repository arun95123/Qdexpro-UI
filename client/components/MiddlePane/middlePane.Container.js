import { connect } from 'react-redux'
import { getScenario,saveScenario,resetMiddlePane } from '../../actions'

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
    saveScenario: () => dispatch(saveScenario()),
    resetMiddlePane: () => dispatch(resetMiddlePane())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
