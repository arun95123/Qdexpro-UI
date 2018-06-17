import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    scenarioSetup: state.scenarioSetup
  };
};

export default connect(mapStateToProps);
