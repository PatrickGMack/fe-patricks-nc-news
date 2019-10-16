import React from 'react';
import { fetchArticleById } from '../api';
import { topicFormat, dateFormat } from '../utils/utils';

class Article extends React.Component {
  state = {
    article: {},
    isLoaded: false
  };
  render() {
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count
    } = this.state.article;
    return (
      <div className="Article">
        {this.state.isLoaded ? (
          <p>
            <strong>{title}</strong>
            <br />
            <em>{author}</em>
            <br />
            {body}
            <br />
            {topicFormat(topic)}
            <br />
            Published on: {dateFormat(created_at)}
            <br />
            Votes: {votes}
            <br />
            Comments: {comment_count}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.addArticle();
  }
  addArticle = async () => {
    const article = await fetchArticleById(this.props.articleId);
    this.setState({ article, isLoaded: true });
  };
}

export default Article;
