import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from '../components/ConcertCard'

class SingleConcert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      concert: {
        vote: 0
      }
    }
  }

  handleOnButtonChange = () => {
    let newVote = this.state.concert.vote += 1
    this.setState({
      concert: {
        vote: newVote
      }
    })
  }

  render() {
    return (
      <div>
          <ConcertCard handleOnButtonChange={this.handleOnButtonChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    concert: state.concert
  })
}

export default connect(mapStateToProps)(SingleConcert);
