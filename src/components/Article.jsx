import React from 'react';
import { fetchArticleById } from '../api';
import { topicFormat, dateFormat } from '../utils/utils';
import Vote from './Vote';
import ErrorPage from './ErrorPage';

class Article extends React.Component {
  state = {
    article: {},
    isLoaded: false,
    errMsg: ''
  };
  render() {
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
      article_id
    } = this.state.article;
    const { errMsg } = this.state;
    if (errMsg === '') {
      return (
        <div className="Article">
          {this.state.isLoaded ? (
            <div>
              <h4>
                <span className="ArticleStyle #b71c1c-text red-text darken-4">
                  {'<'}
                </span>
                {title}
                <span className="ArticleStyle #b71c1c-text red-text darken-4">
                  {' />'}
                </span>
              </h4>
              <p>
                <em>By: {author}</em>
                <br />
                {body}
                <br />
                <br />
                <em>Topic: {topicFormat(topic)}</em>
                <br />
                Published on: {dateFormat(created_at)}
                <br />
                Comments: {comment_count}
                <br />
              </p>
              <Vote target="articles" votes={votes} item_id={article_id} />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    } else {
      return <ErrorPage errMsg={errMsg} />;
    }
  }
  componentDidMount() {
    this.addArticle();
  }
  addArticle = async () => {
    try {
      const article = await fetchArticleById(this.props.articleId);
      this.setState({ article, isLoaded: true });
    } catch (err) {
      this.setState({ errMsg: 'Article not found!' });
    }
  };
}

export default Article;
