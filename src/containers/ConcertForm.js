import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateConcertFormData } from '../actions/concertForm'
import { createConcert } from '../actions/concerts'

class ConcertForm extends Component {

  handleOnChange = (event) => {
    const { name, value } = event.target;
    const currentConcertFormData = Object.assign({}, this.props.concertFormData, {
      [name]: value
    })
    this.props.updateConcertFormData(currentConcertFormData)
  }

  handleOnSubmit = (event) => {
    event.preventDefault;
    this.props.createConcert(this.props.concertFormData)
  }

  render() {
    const {artist, genre, date, venue_id} = this.props.concertFormData;

    return (
      <div>
        Add a Concert to the Inventory
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Artist:</label>
            <input
              type='text'
              onChange = {this.handleOnChange}
              name='artist'
              value={artist}
            />
          </div>
          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              type='text'
              onChange = {this.handleOnChange}
              name='genre'
              value={genre}
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type='date'
              onChange = {this.handleOnChange}
              name='date'
              value={date}
            />
          </div>
          <div>
            <label htmlFor="length">Venue:</label>
            <input
              type='string'
              onChange = {this.handleOnChange}
              name='venue_id'
              value={venue_id}
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
    concertFormData: state.concertFormData
  }
}

export default connect(mapStateToProps, {
  updateConcertFormData,
  createConcert
})(ConcertForm);
