import SingleStatusComponent from '../components/SingleStatusComponent'
import {connect} from 'react-redux'
import {removeStatus} from '../actions'

const mapStateToProps = (state, ownProps) => ({
  status: ownProps.status
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeStatus: () => dispatch(removeStatus(ownProps.status.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleStatusComponent)
