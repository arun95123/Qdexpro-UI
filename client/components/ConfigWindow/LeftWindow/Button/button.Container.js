import { connect } from 'react-redux';
import { expandTextArea,saveStep } from '../../../../actions'

const mapStateToProps = (state) => {
  return {
    textAreaExpand: state.configWindowReducer.textAreaExpand
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    expandTextArea: () => dispatch(expandTextArea()),
    saveStep: (name,data,isTestCase,title,index) => dispatch(saveStep(name,data,isTestCase,title,index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
