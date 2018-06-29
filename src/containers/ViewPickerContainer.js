import {connect} from 'react-redux'
import {setActiveView, fetchMyRepos} from '../actions'
import ViewPickerComponent from '../components/ViewPickerComponent'

const mapStateToProps = (state) => ({
  activeView: state.ActiveView
})

const mapDispatchToProps = (dispatch) => ({
  setActiveView: event =>
    {const viewName = event.currentTarget.dataset.viewName

     if (viewName === 'MY_REPOS') {
     dispatch(fetchMyRepos())}


     dispatch(
      setActiveView(viewName))


    }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(ViewPickerComponent)
