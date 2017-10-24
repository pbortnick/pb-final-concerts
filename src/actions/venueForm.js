export const updateVenueFormData = venueFormData => {
  return {
    type: "UPDATED_VENUE_DATA",
    venueFormData
  }
}

export const resetVenueForm = () => {
  return {
    type: 'RESET_VENUE_FORM'
  }
}
