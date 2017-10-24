import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './navbar';
import ConcertsPage from '../containers/ConcertsPage';
import VenuesPage from '../containers/VenuesPage';
import ConcertForm from '../containers/ConcertForm';
import VenueForm from '../containers/VenueForm';

import Home from '../containers/Home';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path='/concerts' component={ConcertsPage} />
          <Route exact path='/concerts/new' component={ConcertForm} />
          <Route path='/venues' component={VenuesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
