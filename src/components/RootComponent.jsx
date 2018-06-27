
import React from 'react'
import HeaderCardComponent from './HeaderCardComponent'
import PostStatusComponent from './PostStatusComponent'
import StatusesComponent from './StatusesComponent';
import ViewPickerComponent from './ViewPickerComponent';
import ReposComponent from './ReposComponent'

class RootComponent extends React.Component {
  constructor(){
    super()
    this.statusId = 1
    this.state = {activeView: 'MY_STATUSES', statuses: []}
    this.postStatus = this.postStatus.bind(this)
    this.removeStatus = this.removeStatus.bind(this)
    this.setActiveView = this.setActiveView.bind(this)
  }

  postStatus(status) {
    const {statuses} = this.state
    const newStatusObj = {id: this.statusId ++ , text: status}
    const newStatuses = statuses.concat(newStatusObj)
    this.setState(
      {statuses: newStatuses}
    )
  }

  removeStatus(event) {
    const {statuses} = this.state
    const statusToRemove = Number(event.currentTarget.dataset.statusId)
    const newStatuses = statuses.filter(status => status.id !== statusToRemove)
    this.setState(
      {statuses: newStatuses})
  }

  setActiveView(event) {
    const viewName = event.currentTarget.dataset.viewName
    this.setState({activeView: viewName})
  }



  render() {
    const {activeView, statuses} = this.state
    return(
      <div className="container">

        <h1>
            <span className="label label-primary">
                <span className="fa fa-book" aria-hidden="true" />
                <span> Bootbook </span>
            </span>
        </h1>
      <br />
        <HeaderCardComponent name="lj" />
        <ViewPickerComponent activeView={activeView} setActiveView = {this.setActiveView} />
        {activeView === 'MY_STATUSES'
          && (
            <div>
              <PostStatusComponent postStatus={this.postStatus} />
              <StatusesComponent statuses = {statuses} removeStatus = {this.removeStatus} />
            </div>
          )
        }
        {activeView === 'MY_REPOS'
          && (
            <ReposComponent />
          )}
      </div>
    )
  }
}

RootComponent.displayName = 'RootComponent'

export default RootComponent
