import React from 'react'
import PropTypes from 'prop-types'

class PostStatusComponent extends React.Component {

  constructor() {
    super()
    this.onStatusChange = this.onStatusChange.bind(this)
    this.onPostClick = this.onPostClick.bind(this)
    this.state = {
      status: ""
    }
  }

  onStatusChange(event){
    this.setState({status:event.target.value})
  }

  onPostClick(event){
    const {status} = this.state
    const {postStatus} = this.props
    postStatus(status)
    this.setState({status:""})
  }

  render() {

    const {status} = this.state

    return (
        <div className = "form-group">
          <label htmlFor="post-status-input">Post</label>
          <div className = "input-group">
            <input
              type = "text"
              id="post-status-input"
              className = "form-control"
              placeholder = "post a status.."
              value = {status}
              onChange = {this.onStatusChange}
            />
            <span className = "input-group-btn">
              <button
              type = "button"
              className="btn btn-default"
              onClick={this.onPostClick}
              >
              Post me </button>
            </span>


          </div>


        </div>


    )
  }
}

PostStatusComponent.propTypes = {
  postStatus: PropTypes.func.isRequired
}

export default PostStatusComponent
