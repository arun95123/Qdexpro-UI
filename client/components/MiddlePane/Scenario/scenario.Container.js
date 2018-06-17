import { connect } from 'react-redux';
import { showScenarioSetup } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioSetup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showScenarioSetup: () => dispatch(showScenarioSetup())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
