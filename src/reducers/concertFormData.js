const initialState = {
  artist: '',
  genre: '',
  date: '',
  venue_id: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case "UPDATED_DATA":
      return action.concertFormData;
    case 'CONCERT':
      return initialState;
    default:
      return state;
  }
}
