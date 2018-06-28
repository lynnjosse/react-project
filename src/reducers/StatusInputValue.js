export default (state = '', action) => {
  switch (action.type)
  {
    case 'SET_STATUS_INPUT_VALUE':
      return action.value;
    default:
      return state;
  }
}
