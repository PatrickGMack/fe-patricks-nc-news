import React from 'react';
import { dateFormat } from '../utils/utils';
import DeleteComment from './DeleteComment';
import Vote from './Vote';

const CommentCard = ({
  author,
  body,
  votes,
  created_at,
  comment_id,
  rerender,
  user
}) => {
  return (
    <div className="CommentCard">
      <p>
        <em>{author}</em>
        <br />
        {body}
        <br />
        Posted on: {dateFormat(created_at)}
      </p>
      {user === author && (
        <DeleteComment comment_id={comment_id} rerender={rerender} />
      )}
      <Vote target="comments" votes={votes} item_id={comment_id} />
    </div>
  );
};

export default CommentCard;
