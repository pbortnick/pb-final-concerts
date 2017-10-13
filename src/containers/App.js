import React, { Component } from 'react';
import '../App.css';
import Concerts from './Concerts'
import Venues from './Venues'
import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      concerts: [],
      venues: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/concerts`)
      .then(response => response.json())
      .then(concerts => this.setState({concerts}))
    fetch(`${API_URL}/venues`)
      .then(response => response.json())
      .then(venues => this.setState({venues}))
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        Hello
        <Concerts concerts={this.state.concerts}/>
        <Venues venues={this.state.venues}/>
      </div>
    )
  }
}

export default App;
