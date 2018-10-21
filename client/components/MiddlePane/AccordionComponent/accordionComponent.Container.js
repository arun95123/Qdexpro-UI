import { connect } from 'react-redux';
import { addStep,removeSetupTearDown} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetupStep: state.stepReducer.scenarioSetupStep,
    scenarioTearDownStep: state.stepReducer.scenarioTearDownStep
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStep: (isTestCase, title, index) => dispatch(addStep(isTestCase, title, index)),
    removeSetupTearDown: (title) => dispatch(removeSetupTearDown(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
