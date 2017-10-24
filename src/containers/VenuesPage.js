import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import VenueCard from '../components/VenueCard';
import { getVenues } from '../actions/venues';
import VenuesShow from './VenuesShow';
import VenueForm from './VenueForm'
import '../venues.css';


class VenuesPage extends Component {

  componentDidMount() {
    this.props.getVenues()
  }

  render() {
    const { venues, match } = this.props;
    return (
      <div className="VenueContainer">
        <h1>Venues</h1>
        <p> Click on name to see more info</p>
        {this.props.venues.map(venue => <VenueCard key={venue.id} venue={venue} />)}

        <Switch>
          <Route path={`${match.url}/new`} component={VenueForm} />
          <Route path={`${match.url}/:venueId`} component={VenuesShow}/>
        </Switch>


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
