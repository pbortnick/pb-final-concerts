import React, { Component } from 'react';
import { connect } from 'react-redux';
import VenueChoices from '../components/VenueChoices';
import { getVenues } from '../actions/venues';

class VenuesChoicesPage extends Component {

  componentDidMount() {
    this.props.getVenues()
  }

  render() {
    return (
      <div className="VenueChoices">
        <h3>Venues</h3>
        {this.props.venues.map(venue => <VenueChoices key={venue.id} venue={venue} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    venues: state.venues
  })
}

export default connect(mapStateToProps, { getVenues })(VenuesChoicesPage);
