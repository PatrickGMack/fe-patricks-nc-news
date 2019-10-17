import React from 'react';
import { fetchArticleById } from '../api';
import { topicFormat, dateFormat } from '../utils/utils';
import Vote from './Vote';

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
      comment_count,
      article_id
    } = this.state.article;
    return (
      <div className="Article">
        {this.state.isLoaded ? (
          <div>
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
              <br />
            </p>
            <Vote target="articles" votes={votes} item_id={article_id} />
          </div>
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
