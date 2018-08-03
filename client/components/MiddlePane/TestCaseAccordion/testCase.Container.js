import { connect } from 'react-redux'
import { addTestCaseStep} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    testCases: state.testcaseReducer.testCases
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTestCaseStep: (index) => dispatch(addTestCaseStep(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
