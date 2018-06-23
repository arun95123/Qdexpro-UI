import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioReducer.scenarioSetup,
    scenarioTearDown: state.scenarioReducer.scenarioTearDown,
    scenarioTestCase: state.scenarioReducer.scenarioTestCase
  };
};

export default connect(mapStateToProps);
