import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {
    let restaurantList = this.props.store.getState().restaurants.map(r=>(
      <Restaurant {...r} key={"restaurant-" + r.id} store={this.props.store}/>
    ))
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
