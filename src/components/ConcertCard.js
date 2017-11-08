import React from 'react';
import { Link } from 'react-router-dom';

const ConcertCard = ({ concert, handleOnButtonChange }) => (
  <div key={concert.id} className="ConcertCard">
    <h3>{concert.artist}</h3>
    <p>Genre: {concert.genre}</p>
    <p>Date: {concert.date}</p>
    <Link to={`/venues/${concert.venue_id}`}>{concert.venue.name}</Link>
    <p>Current Votes: {concert.vote}</p>
    <button id={concert.id} onClick={() => handleOnButtonChange(concert)}>Add Vote</button>
  </div>
)

export default ConcertCard;
