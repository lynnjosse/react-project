import React from "react"
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import SingleStatusContainer from '../containers/SingleStatusContainer'

const StatusesComponent = ({statuses}) => (
  <div>
    <div className = "well well-sm">
    { statuses.size >0
      ? statuses.toArray().map(status => (
        <SingleStatusContainer key={status.id} status = {status} />
      )) : (
      <div>no status</div>
    )
    }
    </div>
  </div>
)

StatusesComponent.displayName = 'StatusesComponent'

StatusesComponent.propTypes = {
 //statuses: PropTypes.instanceOf(Immutable.OrderedMap).isRequired,

}

export default StatusesComponent
