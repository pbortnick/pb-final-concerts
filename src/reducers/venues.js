export default (state = [], action) => {
  switch(action.type) {
    case 'GET_VENUES_SUCCESS':
      return action.venues;
    default:
      return state;
  }
}
