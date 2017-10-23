import React, { Component } from 'react';
import { connect } from 'react-redux';
import Venue from '../components/Venue'

class VenuesShow extends Component {

  render() {
    return (
      <div>
        <Venue venue={this.props.venue}/>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const venue = state.venues.find(venue => venue.id === +ownProps.match.params.venueId)

  if (venue) {
    return { venue }
  } else {
    return { venue: {} }
  }
}

export default connect(mapStateToProps)(VenuesShow);
