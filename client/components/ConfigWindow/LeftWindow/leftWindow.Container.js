import { connect } from 'react-redux';
import { expandTextArea,saveStep,getScript,loadData } from '../../../actions'

const mapStateToProps = (state) => {
  return {
    textAreaExpand: state.configWindowReducer.textAreaExpand,
    scenarioSetupStep: state.stepReducer.scenarioSetupStep,
    initialValues:state.configWindowReducer.stepConfig
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    expandTextArea: () => dispatch(expandTextArea()),
    saveStep: (data,isTestCase,title,index) => dispatch(saveStep(data,isTestCase,title,index)),
    getScript: () => dispatch(getScript()),
    loadData: (data) => dispatch(loadData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
