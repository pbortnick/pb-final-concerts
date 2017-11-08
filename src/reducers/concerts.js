export default (state = [], action) => {
  switch(action.type) {
    case 'GET_CONCERTS_SUCCESS':
      return action.concerts;
    case 'CREATE_CONCERT_SUCCESS':
      return state.concat(action.concert);
    case 'ADD_VOTE':
      let index = state.findIndex(concert => concert.id === action.concert.id)
      let concert = state[index]
      return [
        ...state.slice(0, index),
        action.concert,
        ...state.slice(index + 1)
      ]
    default:
      return state;
  }
}
