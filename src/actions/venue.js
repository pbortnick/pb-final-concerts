const API_URL = process.env.REACT_APP_API_URL;

export const setVenue = venue => {
  return {
    type: 'GET_VENUE_SUCCESS',
    venue
  }
}

export const getVenue = (venue) => {
  return dispatch => {
    return fetch(`${API_URL}/venues/${venue.id}`)
      .then(response => response.json())
      .then(venue => dispatch(setVenue(venue)))
      .catch(error => console.log(error));
  }
}
