import { testCaseSetupteardownHeight } from '../../../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    testCaseSetupHeight:state.testcaseReducer.testCaseSetupHeight,
    testCaseTearDownHeight:state.testcaseReducer.testCaseTearDownHeight
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testCaseSetupteardownHeight: (isTestCase, title, height) => dispatch(testCaseSetupteardownHeight(isTestCase, title, height))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
