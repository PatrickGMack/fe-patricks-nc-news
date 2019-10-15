import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchTopics } from '../api';
import { topicFormat } from '../utils/utils';

class Navbar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="Navbar">
        {this.state.topics.map(topic => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
              {topicFormat(topic.slug)}
            </Link>
          );
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
