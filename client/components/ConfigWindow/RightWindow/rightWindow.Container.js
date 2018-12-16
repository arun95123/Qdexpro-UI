import { connect } from 'react-redux';
import { expandTextArea } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    textAreaExpand: state.configWindowReducer.textAreaExpand,
    editorCode: state.configWindowReducer.editorCode
  };
};

export default connect(mapStateToProps);
