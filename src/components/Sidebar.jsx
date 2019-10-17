import React from 'react';
import { fetchArticles } from '../api';
import ArticleCard from './ArticleCard';

class Sidebar extends React.Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="Sidebar">
        <strong>Top Rated Articles</strong>
        {this.state.articles.slice(0, 3).map(article => {
          return <ArticleCard {...article} key={article.article_id + ' top'} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    this.addTopArticles();
  }
  addTopArticles = async () => {
    const articles = await fetchArticles(undefined, 'votes');
    console.log(articles);
    this.setState({ articles });
  };
}

export default Sidebar;
