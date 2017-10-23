import React from 'react';
import { Link } from 'react-router-dom';

const VenueCard = ({ venue }) => (
  <div className="VenueCard">
    <h3><Link key={venue.id} to={`/venues/${venue.id}`}>{venue.name}</Link></h3>
  </div>
)

export default VenueCard;
