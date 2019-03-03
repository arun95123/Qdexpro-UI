import { connect } from 'react-redux';
import { saveMapping } from '../../actions'


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMapping: (field,index,data) => dispatch(saveMapping(field,index,data))
  };
};

export default connect(mapStateToProps,mapDispatchToProps);
