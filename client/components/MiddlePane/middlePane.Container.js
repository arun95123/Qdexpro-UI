import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioReducer.scenarioSetup
  };
};

export default connect(mapStateToProps);
