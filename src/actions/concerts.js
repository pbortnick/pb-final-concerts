import { resetConcertForm } from './concertForm'

const API_URL = process.env.REACT_APP_API_URL;

  export const setConcerts = concerts => {
    return {
      type: 'GET_CONCERTS_SUCCESS',
      concerts
    }
  }

  export const addConcert = concert => {
    return {
      type: 'CREATE_CONCERT_SUCCESS',
      concert: concert
    }
  }

  export const getConcerts = () => {
    return dispatch => {
      return fetch(`${API_URL}/concerts`)
        .then(response => response.json())
        .then(concerts => dispatch(setConcerts(concerts)))
        .catch(error => console.log(error))
    }
  };

export const createConcert = concert => {
  return dispatch => {
    return fetch(`${API_URL}/concerts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ concert: concert })
    })
      .then(response => response.json())
      .then(concert => {
        dispatch(addConcert(concert))
        dispatch(resetConcertForm())
      })
      .catch(error => console.log(error))
  }
}
