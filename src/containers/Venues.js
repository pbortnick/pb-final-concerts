import React, { Component } from 'react';
import { connect } from 'react-redux';
import VenueCard from '../components/VenueCard';
import { getVenues } from '../actions/venues';
import './Venues.css';

class Venues extends Component {

  componentDidMount() {
    this.props.getVenues()
  }

  render() {
    return (
      <div className="VenueContainer">
        <h1>Venues</h1>
        {this.props.venues.map(venue => <VenueCard key={venue.id} venue={venue} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    venues: state.venues
  })
}

export default connect(mapStateToProps, { getVenues })(Venues);
