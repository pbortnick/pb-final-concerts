import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateVenueFormData } from '../actions/venueForm'
import { createVenue } from '../actions/venues'
import '../form.css'

class VenueForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentVenueFormData = Object.assign({}, this.props.venueFormData, {
      [name]: value
    })
    this.props.updateVenueFormData(currentVenueFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createVenue(this.props.venueFormData)
  }

  render() {
    const {name, city, state, description, image} = this.props.venueFormData;

    return (
      <div className="form">
        <h3>Add a Local Venue</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Artist: </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange = {this.handleOnChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="city">Genre: </label>
            <input
              type='text'
              name='city'
              value={city}
              onChange = {this.handleOnChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="state">Date: </label>
            <input
              type='text'
              name='state'
              value={state}
              onChange = {this.handleOnChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type='text'
              name='description'
              value={description}
              onChange = {this.handleOnChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="image">Image Url: </label>
            <input
              type='text'
              name='image'
              value={image}
              onChange = {this.handleOnChange}
            />
          </div>
          <br></br>
          <button type='submit'>Add Venue</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    venueFormData: state.venueFormData,
    venues: state.venues
  }
}

export default connect(mapStateToProps, {
  updateVenueFormData,
  createVenue
})(VenueForm);
