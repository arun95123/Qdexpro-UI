import { connect } from 'react-redux'
import { addTestCaseStep,removeTestCase } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    testCases: state.testcaseReducer.testCases
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTestCaseStep: (index) => dispatch(addTestCaseStep(index)),
    removeTestCase: (index) => dispatch(removeTestCase(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
