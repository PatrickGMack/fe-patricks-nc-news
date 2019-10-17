import React, { Component } from 'react';
import { patchVotes } from '../api';

class Vote extends Component {
  state = {
    optimisticVotes: this.props.votes
  };
  render() {
    return (
      <div className="Vote">
        <form action="">
          Votes: {this.state.optimisticVotes}
          <br />
          <button name="1" onClick={this.voteChange}>
            Upvote
          </button>
          <button name="-1" onClick={this.voteChange}>
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
