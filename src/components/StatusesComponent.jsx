import React from "react"
import PropTypes from 'prop-types'

const StatusesComponent = ({statuses, removeStatus}) => (
  <div>
    <div className = "well well-sm">
    {statuses && statuses.length >0
      ? statuses.map(status => (
        <div className = "list-group-item" key={status.id}>
          {status.text}

          <button
            type="button"
            className = "close"
            data-status-id={status.id}
            aria-label="DELETE Status"
            onClick={removeStatus}>
            <span className = "fa fa-close" aria-hidden = "true"/>
          </button>
        </div>

      )
      )
      : (<div>no status</div>)
    }

    </div>
  </div>
)




StatusesComponent.displayName = 'StatusesComponent'
StatusesComponent.propTypes = {
  statuses: PropTypes.array,
  removeStatus: PropTypes.func
}

export default StatusesComponent
