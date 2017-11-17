import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    input: ""
  }

  handleChange = (ev) => {
    this.setState({input: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch(this.makeRestaurant(this.state.input))
    this.setState({input: ""})
  }

  makeRestaurant = (name) => (
    {
      type: "NEW_RESTAURANT",
      payload: name
    }
  )

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name</label>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="Create Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
