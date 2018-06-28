export default (state = "MY_STATUSES", action) => {
  switch (action.type) {
    case 'SET_ACTIVE_VIEW':
      return action.view;
    default:
      return state;
  }
}
