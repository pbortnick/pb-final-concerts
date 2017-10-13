import React, { Component } from 'react';
import '../Concerts.css';
import ConcertCard from '../components/ConcertCard'
import ConcertForm from './ConcertForm'

class Concerts extends Component {

  render() {
    return (
      <div className="ConcertsContainer">
        <h1>Concerts</h1>
        {this.props.concerts.map(concert => <ConcertCard concert={concert} />
         )}
         <ConcertForm />
      </div>
    )
  }
}

export default Concerts;
