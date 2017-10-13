import React from 'react';
import '../Venues.css';
import VenueCard from './VenueCard'

const Venues = (props) => (
  <div className="VenuesContainer">
    <h1>Venues</h1>
    {props.venues.map(venue => <VenueCard venue={venue} />
     )}
  </div>
);

export default Venues;
