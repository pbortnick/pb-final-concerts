import React, {Component} from 'react';
import '../home.css'
class Home extends Component {

  render() {
    return (
      <div className="container">
        <img src="http://phishthoughts.com/wp-content/uploads/2014/01/photo-3.jpg" />
        <div className="center">
          <h1>Welcome</h1>
          <h3>Please use the navigation bar to explore upcoming concerts and nearby venues</h3>
        </div>
      </div>
    )
  }
}

export default Home;
