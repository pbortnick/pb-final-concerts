const API_URL = process.env.REACT_APP_API_URL;

const setVenues = venues => {
  return {
    type: 'GET_VENUES_SUCCESS',
    venues
  }
}

const addVenue = venue => {
  return {
    type: 'CREATE_VENUE_SUCCESS',
    venue: venue
  }
}

export const getVenues = () => {
  return dispatch => {
    return fetch(`${API_URL}/venues`)
      .then(response => response.json())
      .then(venues => dispatch(setVenues(venues)))
      .catch(error => console.log(error));
  }
}
