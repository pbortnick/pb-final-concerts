import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import VenueCard from '../components/VenueCard';
import { getVenues } from '../actions/venues';
import VenuesShow from './VenuesShow'
import '../venues.css'

class VenuesPage extends Component {

  componentDidMount() {
    this.props.getVenues()
  }

  render() {
    const { match } = this.props;
    return (
      <div className="VenueContainer">
        <h1>Venues</h1>
        <p> Click on name to see more info</p>
        {this.props.venues.map(venue => <VenueCard key={venue.id} venue={venue} />)}

        <Route exact path={`${match.url}/:venueId`} component={VenuesShow}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    venues: state.venues
  })
}

export default connect(mapStateToProps, { getVenues })(VenuesPage);
