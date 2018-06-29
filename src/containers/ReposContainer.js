
import {connect} from 'react-redux'
import ReposComponent from './../components/ReposComponent'
import { fetchMyRepos } from '../actions';

const mapStateToProps = (state)=> ({
  repos: state.Repos
})

const mapDispatchToProps = () => ({
  retryFetchingRepos: () => dispatch(fetchMyRepos())

})

export default connect(mapStateToProps, mapDispatchToProps)(ReposComponent)
