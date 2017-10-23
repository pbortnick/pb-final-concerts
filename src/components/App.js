import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import NavBar from './navbar';
import ConcertsPage from '../containers/ConcertsPage';
import VenuesPage from '../containers/VenuesPage';
import ConcertForm from '../containers/ConcertForm';
import VenuesShow from '../containers/VenuesShow';
import Home from '../containers/Home';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path='/concerts' component={ConcertsPage} />
          <Switch>
            <Route exact path='/concerts/new' component={ConcertForm} />
          </Switch>
          <Route path='/venues' component={VenuesPage} />
          <Switch>
            <Route path="/venues/:id" component={VenuesShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
