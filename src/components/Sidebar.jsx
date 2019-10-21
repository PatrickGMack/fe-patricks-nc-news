import React from 'react';
import { fetchArticles } from '../api';
import ArticleCard from './ArticleCard';
import ErrorPage from './ErrorPage';

class Sidebar extends React.Component {
  state = {
    articles: [],
    errMsg: ''
  };
  render() {
    const { errMsg } = this.state;
    if (errMsg === '') {
      return (
        <div className="Sidebar">
          <h5>
            {' '}
            <span className="#b71c1c-text red-text darken-4">{'<'}</span> Top
            Rated Articles{' '}
            <span className="#b71c1c-text red-text darken-4">{'/>'}</span>
          </h5>
          {this.state.articles.slice(0, 3).map(article => {
            return (
              <ArticleCard
                {...article}
                key={article.article_id + ' top'}
                className="TopArticles"
              />
            );
          })}
        </div>
      );
    } else {
      return <ErrorPage errMsg={errMsg} />;
    }
  }
  componentDidMount() {
    this.addTopArticles();
  }
  addTopArticles = async () => {
    try {
      const articles = await fetchArticles(undefined, 'votes');
      this.setState({ articles });
    } catch (err) {
      this.setState({
        errMsg:
          "Can't load the top articles bar right now, please try again later!"
      });
    }
  };
}

export default Sidebar;
