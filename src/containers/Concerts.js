import React from 'react';
import '../Concerts.css';

const Concerts = (props) => (
  <div className="ConcertsContainer">
    <h1>Concerts</h1>
    {props.concerts.map(concert =>
      <div key={concert.id} className="ConcertCard">
        <h3>{concert.artist}</h3>
        <p>Genre: {concert.genre}</p>
        <p>Date: {concert.date}</p>
        <p>Venue: {concert.venue.name}</p>
      </div>
     )}
  </div>
);

export default Concerts;
