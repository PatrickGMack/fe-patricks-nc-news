import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import { fetchArticles } from '../api';
import ErrorPage from './ErrorPage';

class Articles extends Component {
  state = {
    articles: [],
    isLoaded: false,
    errMsg: ''
  };
  render() {
    const { articles, errMsg } = this.state;
    if (errMsg === '') {
      return (
        <main className="Articles">
          <strong>News Articles</strong>
          <select
            name=""
            id="SortBy"
            defaultValue="Sort By..."
            onChange={this.handleSelect}
          >
            <option value="Sort By..." disabled>
              Sort By...
            </option>
            <option value="created_at">Most Recent</option>
            <option value="comment_count">Most Engaged With</option>
            <option value="votes">Most Popular</option>
          </select>
          {this.state.isLoaded ? (
            articles.map(article => {
              return <ArticleCard {...article} key={article.article_id} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </main>
      );
    } else {
      return <ErrorPage errMsg={errMsg} />;
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.addArticles();
    }
  }
  componentDidMount() {
    this.addArticles();
  }
  addArticles = async sortBy => {
    try {
      const articles = await fetchArticles(this.props.topic, sortBy);
      this.setState({ articles, isLoaded: true });
    } catch ({ msg }) {
      this.setState({ errMsg: msg });
    }
  };
  handleSelect = e => {
    const sortBy = e.target.value;
    this.addArticles(sortBy);
  };
}

export default Articles;
