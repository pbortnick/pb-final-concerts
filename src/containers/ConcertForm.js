import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateConcertFormData, resetConcertForm } from '../actions/concertForm'
import { createConcert } from '../actions/concerts'

class ConcertForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentConcertFormData = Object.assign({}, this.props.concertFormData, {
      [name]: value
    })
    this.props.updateConcertFormData(currentConcertFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createConcert(this.props.concertFormData)
  }

  render() {
    const {artist, genre, date, venue_id} = this.props.concertFormData;

    return (
      <div>
        <h3>Add an Upcoming Concert</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="artist">Artist: </label>
            <input
              type='text'
              name='artist'
              value={artist}
              onChange = {this.handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="genre">Genre: </label>
            <input
              type='text'
              name='genre'
              value={genre}
              onChange = {this.handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date: </label>
            <input
              type='date'
              name='date'
              value={date}
              onChange = {this.handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="venue_id">Venue: </label>
            <input
              type='number'
              name='venue_id'
              value={venue_id}
              onChange = {this.handleOnChange}
            />
          </div>
          <button type='submit'>Add Concert</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    concertFormData: state.concertFormData,
    concerts: state.concerts
  }
}

export default connect(mapStateToProps, {
  updateConcertFormData,
  createConcert
})(ConcertForm);
