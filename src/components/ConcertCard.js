import React from 'react';
import { Link } from 'react-router-dom';

const ConcertCard = ({ concert, venue }) => (
  <div key={concert.id} className="ConcertCard">
    <h3>{concert.artist}</h3>
    <p>Genre: {concert.genre}</p>
    <p>Date: {concert.date}</p>
    <Link to={`/venues/${concert.venue_id}`}>{concert.venue.name}</Link>
  </div>
)

export default ConcertCard;
