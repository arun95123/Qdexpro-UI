import { connect } from 'react-redux';
import { expandTextArea,saveStep,getScript } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    textAreaExpand: state.configWindowReducer.textAreaExpand,
    initialValues: state.configWindowReducer.stepConfig
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    expandTextArea: () => dispatch(expandTextArea()),
    saveStep: (data,isTestCase,title,index) => dispatch(saveStep(data,isTestCase,title,index)),
    getScript: () => dispatch(getScript())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
