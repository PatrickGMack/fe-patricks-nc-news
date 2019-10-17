import React, { Component } from 'react';
import { patchVotes } from '../api';

class Vote extends Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    return (
      <div className="Vote">
        <form action="">
          Votes: {this.state.optimisticVotes + this.props.votes}
          <br />
          <button
            name="1"
            onClick={this.voteChange}
            disabled={this.state.optimisticVotes === 1}
          >
            Upvote
          </button>
          <button
            name="-1"
            onClick={this.voteChange}
            disabled={this.state.optimisticVotes === -1}
          >
            Downvote
          </button>
        </form>
      </div>
    );
  }
  voteChange = e => {
    e.preventDefault();
    const vote = +e.target.name;
    const voteObj = { inc_votes: vote };
    patchVotes(this.props.target, this.props.item_id, voteObj);
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote
      };
    });
  };
}

export default Vote;
