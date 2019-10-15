import React from 'react';
import { topicFormat, dateFormat } from '../utils/utils';

const ArticleCard = ({
  title,
  author,
  topic,
  votes,
  comment_count,
  created_at
}) => {
  return (
    <div className="ArticleCard">
      <p>
        <strong>{title}</strong>
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
    </div>
  );
};

export default ArticleCard;
