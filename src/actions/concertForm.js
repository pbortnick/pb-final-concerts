export const updateConcertFormData = concertFormData => {
  return {
    type: "UPDATED_DATA",
    concertFormData
  }
}


export const resetConcertForm = () => {
  return {
    type: 'RESET_SURFBOARD_FORM',

  }
}
