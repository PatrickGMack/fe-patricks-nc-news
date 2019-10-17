import React, { Component } from 'react';
import { fetchComments, addComment } from '../api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <main className="Comments">
        <strong>
          <em>Comments</em>
        </strong>
        <p>Add comment:</p>{' '}
        <CommentAdder
          user={this.props.user}
          addUserComment={this.addUserComment}
        />
        {comments.map(comment => {
          return (
            <CommentCard
              {...comment}
              key={comment.comment_id}
              rerender={this.rerender}
              user={this.props.user}
            />
          );
        })}
      </main>
    );
  }
  componentDidMount() {
    this.addComments();
  }
  addComments = async () => {
    const comments = await fetchComments(this.props.articleId);
    this.setState({ comments });
  };
  addUserComment = newComment => {
    addComment(this.props.articleId, {
      username: this.props.user,
      body: newComment
    }).then(({ addedComment }) => {
      this.setState(currentState => {
        return { comments: [addedComment, ...currentState.comments] };
      });
    });
  };
  rerender = () => {
    this.addComments();
  };
}

export default Comments;
