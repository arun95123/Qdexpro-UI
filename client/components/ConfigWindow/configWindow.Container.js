import { connect } from 'react-redux';
import { saveStep } from '../../actions'


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveStep: (data,isTestCase,title,index) => dispatch(saveStep(data,isTestCase,title,index))
  };
};

export default connect(mapStateToProps,mapDispatchToProps);
