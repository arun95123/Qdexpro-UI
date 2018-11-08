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
    removeSetupTearDown: (title,isTestCase,index) => dispatch(removeSetupTearDown(title,isTestCase,index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
