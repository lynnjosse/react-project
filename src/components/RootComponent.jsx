
import React from 'react'
import HeaderCardComponent from './HeaderCardComponent'
import ViewPickerContainer from '../containers/ViewPickerContainer';
import ReposComponent from './ReposComponent'
import PropTypes from 'prop-types'
import PostStatusContainer from '../containers/PostStatusContainer'
import StatusesContainer from '../containers/StatusesContainer'

const RootComponent = ({activeView}) => (
  <div className="container">
    <h1>
        <span className="label label-primary">
            <span className="fa fa-book" aria-hidden="true" />
            <span> Bootbook </span>
        </span>
    </h1>
  <br />
    <HeaderCardComponent name="lj" />
    <ViewPickerContainer />
    {activeView === 'MY_STATUSES'
      && (
        <div>
          <PostStatusContainer />
          <StatusesContainer />
        </div>
      )
    }
    {activeView === 'MY_REPOS'
      && (
        <ReposComponent />
      )}
  </div>
)

RootComponent.displayName = 'RootComponent'
RootComponent.propTypes = {
    activeView: PropTypes.string.isRequired
  }

export default RootComponent
