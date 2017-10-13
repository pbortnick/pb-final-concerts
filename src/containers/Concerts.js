import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from '../components/ConcertCard';
import ConcertForm from './ConcertForm';
import { getConcerts } from '../actions/concerts';
import './Concerts.css';

class Concerts extends Component {

  componentDidMount() {
    this.props.getConcerts()
  }

  render() {
    return (
      <div className="ConcertContainer">
        <h1>Concerts</h1>
        {this.props.concerts.map(concert => <ConcertCard key={concert.id} concert={concert} />)}
        <ConcertForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    concerts: state.concerts
  })
}

export default connect(mapStateToProps, { getConcerts })(Concerts);
