import { connect } from 'react-redux';
import { expandTextArea } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    textAreaExpand: state.configWindowReducer.textAreaExpand
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    expandTextArea: () => dispatch(expandTextArea())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
