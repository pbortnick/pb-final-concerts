import { resetVenueForm } from './venueForm';

const API_URL = process.env.REACT_APP_API_URL;

const setVenues = venues => {
  return {
    type: 'GET_VENUES_SUCCESS',
    venues
  }
}

export const addVenue = venue => {
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

export const createVenue = venue => {
  return dispatch => {
    return fetch(`${API_URL}/venues`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ venue: venue })
    })
      .then(response => response.json())
      .then(venue => {
        dispatch(addVenue(venue))
        dispatch(resetVenueForm())
      })
      .catch(error => console.log(error))
  }
}
