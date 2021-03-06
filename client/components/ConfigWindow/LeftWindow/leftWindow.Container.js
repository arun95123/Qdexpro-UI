import { connect } from "react-redux";
import {
  expandTextArea,
  saveStep,
  getScript,
  loadData
} from "../../../actions";

const mapStateToProps = state => {
  return {
    textAreaExpand: state.configWindowReducer.textAreaExpand,
    scenarioSetupStep: state.stepReducer.scenarioSetupStep,
    initialValues: state.configWindowReducer.stepConfig,
    // mappingList:state.classMapperReducer.mappingList
    controlType: state.classMapperReducer.controlType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    expandTextArea: () => dispatch(expandTextArea()),
    saveStep: (data, isTestCase, title, index) =>
      dispatch(saveStep(data, isTestCase, title, index)),
    getScript: data => dispatch(getScript(data)),
    loadData: data => dispatch(loadData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
