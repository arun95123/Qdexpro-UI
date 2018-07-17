import { connect } from 'react-redux';
import { addStep} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    scenarioSetupStep: state.stepReducer.scenarioSetupStep,
    scenarioTearDownStep: state.stepReducer.scenarioTearDownStep,
  };
};


export default connect(mapStateToProps);
