import React from 'react';

const ConcertCard = ({concert}) => (
  <div key={concert.id} className="ConcertCard">
    <h3>{concert.artist}</h3>
    <p>Genre: {concert.genre}</p>
    <p>Date: {concert.date}</p>
    <p>Venue: {concert.venue.name}</p>
  </div>
);

export default ConcertCard;
