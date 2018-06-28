import {connect}            from 'react-redux'
import PostStatusComponent  from '../components/PostStatusComponent'
import {postNewStatus, setStatusInputValue} from '../actions'


const mapStateToProps = (state) => ({
  StatusInputValue: state.StatusInputValue
});

const mapDispatchToProps = dispatch => ({
  onStatusInputChange: event => dispatch(setStatusInputValue(event.target.value)),
  postNewStatus: () => dispatch(postNewStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostStatusComponent);
