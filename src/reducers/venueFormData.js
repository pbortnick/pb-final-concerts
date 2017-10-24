const initialState = {
  name: '',
  city: '',
  state: '',
  description: '',
  image: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case "UPDATED_VENUE_DATA":
      return action.venueFormData;
    case "RESET_VENUE_FORM":
      return initialState;
    default:
      return state;
  }
}
