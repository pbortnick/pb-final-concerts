import React from 'react';

const ConcertCard = ({ concert }) => (
  <div key={concert.id} className="ConcertCard">
    <h3>{concert.artist}</h3>
    <p>Price: ${concert.genre}</p>
    <img className="ConcertImage" src={concert.date} alt={concert.artist}/>
    <p>Length: {concert.venue.name} inches</p>
  </div>
)

export default ConcertCard;
