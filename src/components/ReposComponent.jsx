import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import ReposRecord from './../reducers/Repos'

const ReposComponent = ({repos, retryFetchingRepos}) => (
  <div>
    {repos.status === 'FETCHING' ? (
      <div className = "alert alert-info">
        <span className = "velocity-spinner-small-inline" />
        <span>...getting your repos</span>
      </div   >
    ) :

      repos.status ==='ERROR' ? (
        <div className = "alert alert-danger">

            something went wrong while getting your damn repos
            <button
              type= "button"
              className = "btn btn-danger pull-right"
              onClick={retryFetchingRepos}
            >
              Retry
            </button>

        </div>
        ) : repos.status ==='SUCCESS' ? (
          <ul>
            {repos.value.map(repo => (
              <a key = {repo.id} href = {repo.html_url} className = "list-group-item">
                {repo.name}
              </a>

            ))}
          </ul>
        ) : null
    }
  </div>
  );

ReposComponent.displayName = 'ReposComponent';

ReposComponent.propTypes = {
  repos: PropTypes.instanceOf(Immutable.Record).isRequired,
  retryFetchingRepos: PropTypes.func.isRequired
}
export default ReposComponent
