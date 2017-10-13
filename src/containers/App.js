import React, { Component } from 'react';
import Concerts from './Concerts';
import Venues from './Venues';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Concerts />
        <Venues />
      </div>
    );
  }
}

export default App;
