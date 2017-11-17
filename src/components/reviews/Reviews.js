import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.store.getState().reviews.reduce((acc, rev)=> {
      if(rev.restaurantId === this.props.restId) {
        acc.push(
          <Review key={"Review-" + rev.id} store={this.props.store} {...rev}/>
        )
      }
      return acc
    }, [])
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
