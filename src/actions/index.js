import agent from 'superagent'

export const setActiveView = view => ({
  type: 'SET_ACTIVE_VIEW',
  view
});

export const removeStatus = statusId => ({
  type: 'REMOVE_STATUS',
  statusId
})

const createStatus = text => ({
  type: 'CREATE_STATUS',
  text
})

export const setStatusInputValue = value => ({
  type: 'SET_STATUS_INPUT_VALUE',
  value
})

export const postNewStatus = () => (dispatch, getState) => {
  const inputValue = getState().StatusInputValue
  if (!inputValue) {
    return;
  }
  dispatch(createStatus(inputValue))
  dispatch(setStatusInputValue(''))
}

export const fetchMyRepos = () => dispatch => {
  dispatch(reposFetching())
  agent
    .get('https://github.platforms.engineering/api/v3/users/evrvo/repos')
    .set('Authorization', `bearer ${process.env.GITHUB_TOKEN}`)
    .end((err, res) => {
      if (err) {
        console.log(err);
        dispatch(reposError(err))
        return
        }
      console.log(res.body)
      dispatch(reposSuccess(res.body))
  })
}

const reposFetching = () => ({
  type: 'REPOS_FETCHING'
})

const reposSuccess = response => ({
  type: 'REPOS_SUCCESS',
  response
})

const reposError = error => ({
  type: 'REPOS_ERROR',
  error
})
