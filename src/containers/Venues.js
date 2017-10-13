import React from 'react';
import '../Venues.css';

const Venues = (props) => (
  <div className="VenuesContainer">
    <h1>Venues</h1>
    {props.venues.map(venue =>
      <div key={venue.id} className="VenueCard">
        <h3>{venue.artist}</h3>
        <p>{venue.genre}</p>
        <p>{venue.date}</p>
      </div>
     )}
  </div>
);

export default Venues;
