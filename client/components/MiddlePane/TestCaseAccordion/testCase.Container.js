import { connect } from 'react-redux'
import { addTestCaseStep,removeTestCase,showTestCaseSetup,showTestCaseTearDown,showTestCaseSetupTearDown } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    testCases: state.testcaseReducer.testCases
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTestCaseStep: (index) => dispatch(addTestCaseStep(index)),
    removeTestCase: (index) => dispatch(removeTestCase(index)),
    showTestCaseSetup: (index) => dispatch(showTestCaseSetup(index)),
    showTestCaseTearDown: (index) => dispatch(showTestCaseTearDown(index)),
    showTestCaseSetupTearDown: (data,index) => dispatch(showTestCaseSetupTearDown(data,index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
