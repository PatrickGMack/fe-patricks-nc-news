import React from 'react';
import { deleteComment } from '../api';
import { Button } from 'react-materialize';

const DeleteComment = props => {
  const handleClick = () => {
    deleteComment(props.comment_id).then(() => {
      props.rerender();
    });
  };
  return (
    <Button onClick={handleClick} className="#b71c1c red darken-4">
      Delete
    </Button>
  );
};

export default DeleteComment;
