import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    input: ""
  }

  handleChange = (ev) => {
    this.setState({
      input: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch(this.writeReview(this.state.input))
    this.setState({input: ""})
  }

  writeReview = (rev) => ({
    type: "WRITE_REVIEW",
    payload: {text: rev, restaurantId: this.props.restId}
  })

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="Post Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
