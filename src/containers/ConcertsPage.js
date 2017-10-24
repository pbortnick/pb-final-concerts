import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from '../components/ConcertCard';
import { getConcerts } from '../actions/concerts';
import '../concerts.css'

class ConcertsPage extends Component {

  componentDidMount() {
    this.props.getConcerts()
  }

  render() {
    return (
      <div className="ConcertContainer">
        <h1>Concerts</h1>
        {this.props.concerts.map(concert => <ConcertCard key={concert.id} concert={concert} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    concerts: state.concerts
  })
}

export default connect(mapStateToProps, { getConcerts })(ConcertsPage);
