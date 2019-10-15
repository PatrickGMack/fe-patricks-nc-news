import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import { fetchArticles } from '../api';

class Articles extends Component {
  state = {
    articles: [],
    isLoaded: false
  };
  render() {
    const { articles } = this.state;
    return (
      <main className="Articles">
        {this.state.isLoaded ? (
          articles.map(article => {
            return <ArticleCard {...article} key={article.article_id} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </main>
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.addArticles();
    }
  }
  componentDidMount() {
    this.addArticles();
  }
  addArticles = async () => {
    const articles = await fetchArticles(this.props.topic);
    this.setState({ articles, isLoaded: true });
  };
}

export default Articles;
