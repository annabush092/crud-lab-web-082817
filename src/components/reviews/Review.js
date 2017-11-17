import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.store.dispatch(this.deleteReview(this.props.id))
  }

  deleteReview = (id) => ({
    type: "DELETE_REVIEW",
    payload: id
  })

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleClick}>Delete Review</button>
      </li>
    );
  }
};

export default Review;
