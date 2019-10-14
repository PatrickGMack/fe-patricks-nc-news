import React, { Component } from 'react';
import { fetchTopics } from '../api';

class Navbar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="Navbar">
        {console.log(this.state.topics)}
        {this.state.topics.map(topic => {
          return <span>{topic.slug}</span>;
        })}
      </div>
    );
  }
  componentDidMount() {
    this.addTopics();
  }
  addTopics = async () => {
    const topics = await fetchTopics();
    this.setState({ topics });
  };
}

export default Navbar;
