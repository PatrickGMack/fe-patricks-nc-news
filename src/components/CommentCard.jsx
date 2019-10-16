import React from 'react';
import { dateFormat } from '../utils/utils';
import DeleteComment from './DeleteComment';

const CommentCard = ({
  author,
  body,
  votes,
  created_at,
  comment_id,
  deleteRender,
  user
}) => {
  return (
    <div className="CommentCard">
      <p>
        <em>{author}</em>
        <br />
        {body}
        <br />
        Votes: {votes}
        <br />
        Posted on: {dateFormat(created_at)}
      </p>
      {user === author && (
        <DeleteComment comment_id={comment_id} deleteRender={deleteRender} />
      )}
    </div>
  );
};

export default CommentCard;
