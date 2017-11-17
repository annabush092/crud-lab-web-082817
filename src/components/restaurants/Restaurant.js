import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js'
import Reviews from '../reviews/Reviews.js'

class Restaurant extends Component {

  handleClick = () => {
    this.props.store.dispatch(this.deleteRest(this.props.id))
  }

  deleteRest = (id) => (
    {
      type: "DELETE_RESTAURANT",
      payload: id
    }
  )

  render() {
    return (
      <div>
        <li>
          <h3>{this.props.name}</h3>
          <ReviewInput restId={this.props.id} store={this.props.store}/>
          <Reviews restId={this.props.id} store={this.props.store}/>
          <button onClick={this.handleClick}>Delete Restaurant</button>
        </li>
      </div>
    );
  }
};

export default Restaurant;
