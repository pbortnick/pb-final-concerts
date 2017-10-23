export default (state = [], action) => {
  switch(action.type) {
    case 'GET_VENUE_SUCCESS':
      return action.venue;
    default:
      return state;
  }
}
