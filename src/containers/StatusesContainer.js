import {connect}        from 'react-redux';
import { createStatus } from '../actions'
import StatusesComponent    from '../components/StatusesComponent';


const mapStateToProps = (state) => ({
  statuses: state.Statuses
})

const mapDispatchToProps = (dispatch) => ({
  removeStatus: () => console.log('remove status')

  // event => dispatch(
    //removeStatus(event.currentTarget.dataset.statusId))

})

export default connect(mapStateToProps, mapDispatchToProps)(StatusesComponent)
