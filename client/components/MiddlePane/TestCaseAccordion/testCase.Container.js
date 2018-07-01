import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    testCases: state.testcaseReducer.testCases
  };
};

export default connect(mapStateToProps);
