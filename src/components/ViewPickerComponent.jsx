import React from 'react'
import PropTypes from 'prop-types'

const ViewPickerComponent = ({activeView, setActiveView}) => (
  <div className = "form-group btn-toolbar">

  <button
    type = "button"
    className={`btn btn-default ${activeView === 'MY_STATUSES' ? 'active' : ''} `}
    data-view-name="MY_STATUSES"
    onClick={setActiveView}>
    <span className="fa fa-bullhorn" aria-hidden = "true" />
    <span>My Statuses</span>
  </button>
  <button
    type = "button"
    className={`btn btn-default ${activeView === 'MY_REPOS' ? 'active' : ''} `}
    data-view-name="MY_REPOS"
    onClick={setActiveView}
    >
    <span className="fa fa-bullhorn" aria-hidden = "true" />
    <span>My Repos</span>
  </button>
  </div>
)

ViewPickerComponent.displayName = 'ViewPickerComponent'
ViewPickerComponent.propTypes  = {
  activeView: PropTypes.oneOf(['MY_STATUSES', 'MY_REPOS']).isRequired,
  setActiveView: PropTypes.func.isRequired
}

export default ViewPickerComponent


