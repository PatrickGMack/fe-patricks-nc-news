import React from 'react';
import { deleteComment } from '../api';

const DeleteComment = props => {
  const handleClick = () => {
    deleteComment(props.comment_id).then(() => {
      props.deleteRender();
    });
  };
  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteComment;
