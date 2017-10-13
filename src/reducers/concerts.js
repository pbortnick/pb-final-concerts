export default (state = [], action) => {
  switch(action.type) {
    case 'GET_CONCERTS_SUCCESS':
      return action.concerts;
    case 'CREATE_CONCERT_SUCCESS':
      return state.concat(action.concert);
    default:
      return state;
  }
}
