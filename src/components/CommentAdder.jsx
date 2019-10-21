import React, { Component } from 'react';
import { Button } from 'react-materialize';

class CommentAdder extends Component {
  state = {
    comment: ''
  };
  render() {
    return (
      <div>
        <form action="">
          <input
            className="commentInput"
            required
            type="text"
            onChange={this.handleChange}
            value={this.state.comment}
            placeholder="Write a comment..."
          />
          <Button
            className="#b71c1c red darken-4"
            waves="light"
            style={{ margin: '5px' }}
            name="1"
            onClick={this.handleClick}
          >
            Post
          </Button>
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
