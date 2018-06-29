import React from 'react'
import PropTypes from 'prop-types'

const PostStatusComponent = ( {StatusInputValue, onStatusInputChange, postNewStatus} ) =>

 (
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
    )



PostStatusComponent.propTypes = {
//  postStatus: PropTypes.func.isRequired,
  statusInputValue: PropTypes.string,
 // onPostStatusChange: PropTypes.func.isRequired
  postNewStatus: PropTypes.func
}

export default PostStatusComponent