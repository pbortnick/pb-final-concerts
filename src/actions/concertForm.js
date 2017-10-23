export const updateConcertFormData = concertFormData => {
  return {
    type: "UPDATED_CONCERT_DATA",
    concertFormData
  }
}

export const resetConcertForm = () => {
  return {
    type: 'RESET_CONCERT_FORM'
  }
}
