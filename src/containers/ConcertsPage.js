import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from '../components/ConcertCard'

import { getConcerts, addVote} from '../actions/concerts';
import '../concerts.css'

class ConcertsPage extends Component {

  handleOnButtonChange = (concert) => {
    this.props.addVote(concert)
  }

  handleClick = () => {
    let concertsList = this.props.concerts
    concertsList.sort(function(a,b) {
      if (a.vote < b.vote) {
        return 1
      }
      if (a.vote > b.vote) {
        return -1
      }
      return 0
    })
    this.setState({
      concerts: concertsList
    })
  }

  componentDidMount() {
    this.props.getConcerts()
  }

  render() {
    return (
      <div className="ConcertContainer">
        <h1>Concerts</h1>
        <button onClick={this.handleClick}>Sort By Votes</button>
        {this.props.concerts.map(concert => <ConcertCard key={concert.id} concert={concert} handleOnButtonChange={this.handleOnButtonChange}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    concerts: state.concerts
  })
}

export default connect(mapStateToProps, { getConcerts, addVote })(ConcertsPage);
