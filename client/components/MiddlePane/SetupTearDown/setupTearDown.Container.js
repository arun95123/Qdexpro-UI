import { connect } from 'react-redux';
import { addStep} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetupStep: state.stepReducer.scenarioSetupStep,
    scenarioTearDownStep: state.stepReducer.scenarioTearDownStep,
    testCases: state.testcaseReducer.testCases
  };
};


export default connect(mapStateToProps);
