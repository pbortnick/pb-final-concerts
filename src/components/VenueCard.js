import React from 'react';

const VenueCard = ({ venue }) => (
  <div key={venue.id} className="VenueCard">
    <h3>{venue.name}</h3>
    <p>Price: ${venue.city}</p>
    <img className="VenueImage" src={venue.state} alt={venue.name}/>
    <p>Length: {venue.description} inches</p>
  </div>
)

export default VenueCard;
