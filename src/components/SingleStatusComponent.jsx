import React from 'react'
import PropTypes from 'prop-types'

const SingleStatusComponent = ({status, removeStatus}) => (
  <div className = "list-group-item" >
          {status.text}

          <button
            type="button"
            className = "close"
            data-status-id={status.id}
            aria-label="Remove Status"
            onClick={removeStatus}>

            <span className = "fa fa-close" aria-hidden = "true"/>
          </button>
        </div>
)

SingleStatusComponent.displayName = 'SingleStatusComponent'
SingleStatusComponent.propTypes = {
  status: PropTypes.object.isRequired,
  removeStatus: PropTypes.func.isRequired
}

export default SingleStatusComponent
