import { connect } from "react-redux";
import { saveMapping, saveText } from "../../actions";

const mapStateToProps = state => {
  return {
    controlType: state.classMapperReducer.controlType,
    control: state.classMapperReducer.control,
    classOptions: state.classMapperReducer.classOptions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // saveMapping: (field, index, data) =>
    //   dispatch(saveMapping(field, index, data)),
    saveText: (no, classes, options) => dispatch(saveText(no, classes, options))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
