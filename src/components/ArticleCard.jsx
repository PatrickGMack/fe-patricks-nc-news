import React from 'react';
import { topicFormat, dateFormat } from '../utils/utils';
import { Link } from '@reach/router';
import { CardPanel } from 'react-materialize';

const ArticleCard = ({
  title,
  author,
  topic,
  votes,
  comment_count,
  created_at,
  article_id
}) => {
  return (
    <CardPanel className="ArticlePanel">
      <Link to={`/articles/${article_id}`} className="ArticleCard">
        <p>
          <strong>
            <span className="ArticleStyle #b71c1c-text red-text darken-4">
              {'<'}
            </span>
            {title}
            <span className="ArticleStyle #b71c1c-text red-text darken-4">
              {' />'}
            </span>
          </strong>
          <br />
          <em>{author}</em>
          <br />
          {topicFormat(topic)}
          <br />
          Published on: {dateFormat(created_at)}
          <br />
          Votes: {votes}
          <br />
          Comments: {comment_count}
        </p>
      </Link>
    </CardPanel>
  );
};

export default ArticleCard;
