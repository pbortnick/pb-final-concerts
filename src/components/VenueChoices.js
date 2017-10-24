import React from 'react';

const VenueChoices = ({ venue }) => (
  <div className="VenueChoices">
    <p>{venue.id} = {venue.name}</p>
  </div>
)

export default VenueChoices;
