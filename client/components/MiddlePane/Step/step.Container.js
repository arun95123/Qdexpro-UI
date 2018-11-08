import { connect } from 'react-redux';
import { removeStep} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetupStep: state.stepReducer.scenarioSetupStep,
    scenarioTearDownStep: state.stepReducer.scenarioTearDownStep
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeStep: (isTestCase, title, index,testCaseindex) => dispatch(removeStep(isTestCase, title, index,testCaseindex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
