import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchTopics } from '../api';
import { topicFormat } from '../utils/utils';
import { Button } from 'react-materialize';

class Navbar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="Navbar #212121 grey darken-4">
        {this.state.topics.map(topic => {
          return (
            <Button
              key={topic.slug}
              className="NavButton #b71c1c red darken-4"
              waves="light"
            >
              <Link className="TopicLink" to={`/articles/topics/${topic.slug}`}>
                {topicFormat(topic.slug)}
              </Link>
            </Button>
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
