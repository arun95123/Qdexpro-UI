import { connect } from 'react-redux';
import { sampleActionOne, sampleActionTwo } from '../../actions';

const mapStateToProps = (state) => {
  return {
    data: state.data || [],
    secondData: state.secondData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action1: (data) => dispatch(sampleActionOne(data)),
    action2: (data) => dispatch(sampleActionTwo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
