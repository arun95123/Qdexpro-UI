import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    testCaseSetupHeight:state.testcaseReducer.testCaseSetupHeight,
    testCaseTearDownHeight:state.testcaseReducer.testCaseTearDownHeight
  };
};

export default connect(mapStateToProps);
