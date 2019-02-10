import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    scenarioNamelist: state.leftPaneReducer.scenarioNamelist
  };
};

export default connect(mapStateToProps);
