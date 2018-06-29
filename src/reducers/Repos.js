
import Immutable from 'immutable'

//we want to track errors, responses. records must be defined with keys and default values
const ReposRecord = Immutable.Record({
 status: null,
 error: null,
 value: null
})

export default (state = new ReposRecord(), action) => {
 switch(action.type) {
  case 'REPOS_FETCHING':
   return state.set('status', 'FETCHING')
  case 'REPOS_SUCCESS':
   return new ReposRecord({
    status: 'SUCCESS',
    value: action.response
   })
  case 'REPOS_ERROR':
   return new ReposRecord({
    status: 'ERROR',
    error: action.error
   })

  default: return state
 }
}
