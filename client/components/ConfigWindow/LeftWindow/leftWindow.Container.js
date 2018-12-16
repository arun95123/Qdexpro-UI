import { connect } from 'react-redux';
import { expandTextArea,saveStep,getScript } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    textAreaExpand: state.configWindowReducer.textAreaExpand
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    expandTextArea: () => dispatch(expandTextArea()),
    saveStep: (name,data,isTestCase,title,index) => dispatch(saveStep(name,data,isTestCase,title,index)),
    getScript: () => dispatch(getScript())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
