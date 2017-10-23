const initialState = {
  artist: '',
  genre: '',
  date: '',
  venue_id: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case "UPDATED_CONCERT_DATA":
      return action.concertFormData;
    case "RESET_CONCERT_FORM":
      return initialState;
    default:
      return state;
  }
}
