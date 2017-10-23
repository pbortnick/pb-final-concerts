import React from 'react';

const Venue = ({ venue }) => (
  <div className="VenueShow">
    <h2>{venue.name}</h2>
    <img className="VenueImage" src={venue.image} alt={venue.name} />
    <p>{venue.city}, {venue.state}</p>
    <p>{venue.description}</p>
  </div>
)

export default Venue;
