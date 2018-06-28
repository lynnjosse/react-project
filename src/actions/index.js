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
