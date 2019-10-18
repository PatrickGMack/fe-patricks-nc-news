import React, { Component } from 'react';
import { patchVotes } from '../api';
import { Button } from 'react-materialize';

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
          <Button
            className="#b71c1c red darken-4"
            waves="light"
            icon="thumb_up"
            style={{ margin: '5px' }}
            name="1"
            onClick={this.voteChange}
            disabled={this.state.optimisticVotes === 1}
          />
          <Button
            style={{ margin: '5px' }}
            className="#b71c1c red darken-4"
            waves="light"
            name="-1"
            icon="thumb_down"
            onClick={this.voteChange}
            disabled={this.state.optimisticVotes === -1}
          />
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
