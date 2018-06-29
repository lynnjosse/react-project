import {combineReducers} from 'redux'
import ActiveView from './ActiveView'
import Repos from './Repos'
import Statuses from './Statuses'
import StatusInputValue from './StatusInputValue'

export default combineReducers({
  ActiveView,
  Repos,
  Statuses,
  StatusInputValue
})
