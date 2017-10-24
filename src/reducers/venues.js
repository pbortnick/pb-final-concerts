export default (state = [], action) => {
  switch(action.type) {
    case 'GET_VENUES_SUCCESS':
      return action.venues;
    case 'CREATE_VENUE_SUCCESS':
      return state.concat(action.venue);
    default:
      return state;
  }
}
