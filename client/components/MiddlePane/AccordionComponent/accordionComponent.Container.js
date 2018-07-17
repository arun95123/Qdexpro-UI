import { connect } from 'react-redux';
import { addStep} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetupStep: state.stepReducer.scenarioSetupStep,
    scenarioTearDownStep: state.stepReducer.scenarioTearDownStep,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStep: (isTestCase, title) => dispatch(addStep(isTestCase, title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
