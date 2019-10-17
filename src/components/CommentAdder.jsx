import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    comment: ''
  };
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <button onClick={this.handleClick}>Post</button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    this.setState({ comment: e.target.value });
  };
  handleClick = e => {
    e.preventDefault();
    this.props.addUserComment(this.state.comment);
    this.setState({ comment: '' });
  };
}

export default CommentAdder;
