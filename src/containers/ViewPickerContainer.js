import {connect} from 'react-redux'
import {setActiveView} from '../actions'
import ViewPickerComponent from '../components/ViewPickerComponent'

const mapStateToProps = (state) => ({
  activeView: state.ActiveView
})

const mapDispatchToProps = (dispatch) => ({
  setActiveView: event => dispatch(
    setActiveView(event.currentTarget.dataset.viewName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewPickerComponent)
