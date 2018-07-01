import { testCaseSetupteardownHeight } from '../../../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    testCases: state.testcaseReducer.testCases
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testCaseSetupteardownHeight: (isTestCase, title, height, index) => dispatch(testCaseSetupteardownHeight(isTestCase, title, height, index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
