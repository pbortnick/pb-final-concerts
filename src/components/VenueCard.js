import React from 'react';

const VenueCard = ({venue}) => (
  <div key={venue.id} className="VenueCard">
    <h3>{venue.name}</h3>
    <p>Location: {venue.city}, {venue.state}</p>
    <p>{venue.description}</p>
  </div>
);

export default VenueCard;
