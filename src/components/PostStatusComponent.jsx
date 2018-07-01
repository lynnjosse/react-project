import React from 'react'
import PropTypes from 'prop-types'

const PostStatusComponent = ( {StatusInputValue, onStatusInputChange, postNewStatus} ) =>
  (
    <form>
      <div className = "form-group">
        <label htmlFor="post-status-input">Post</label>
        <div className = "input-group">
          <input
            type = "text"
            id="post-status-input"
            className = "form-control"
            placeholder = "post a status.."
            value = {StatusInputValue}
            onChange = {onStatusInputChange}
          />
          <span className = "input-group-btn">
            <button
            type = "button"
            className="btn btn-default"
            onClick={postNewStatus}
            >
            Post me </button>
          </span>
        </div>
      </div>
    </form>
  )

PostStatusComponent.propTypes = {
  postNewStatus: PropTypes.func.isRequired,
  statusInputValue: PropTypes.string,
  onStatusInputChange: PropTypes.func.iseduxRequired
}

export default PostStatusComponent
