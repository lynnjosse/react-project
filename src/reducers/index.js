import {combineReducers} from 'redux'
import ActiveView from './ActiveView'
import Statuses from './Statuses'
import StatusInputValue from './StatusInputValue'

export default combineReducers({
  ActiveView,
  Statuses,
  StatusInputValue
})
