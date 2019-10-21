import React, { Component } from 'react';
import { fetchComments, addComment } from '../api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import ErrorPage from './ErrorPage';

class Comments extends Component {
  state = {
    comments: [],
    errMsg: ''
  };
  render() {
    const { comments, errMsg } = this.state;
    if (errMsg === '') {
      return (
        <main className="Comments">
          <strong>
            <h5>
              {' '}
              <span className="#b71c1c-text red-text darken-4">{'<'}</span>{' '}
              Comments{' '}
              <span className="#b71c1c-text red-text darken-4">{'/>'}</span>
            </h5>
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
    } else {
      return <ErrorPage errMsg={errMsg} />;
    }
  }
  componentDidMount() {
    this.addComments();
  }
  addComments = async () => {
    try {
      const comments = await fetchComments(this.props.articleId);
      this.setState({ comments });
    } catch (err) {
      this.setState({
        errMsg: "Can't load comments right now, please try again later!"
      });
    }
  };
  addUserComment = newComment => {
    addComment(this.props.articleId, {
      username: this.props.user,
      body: newComment
    })
      .then(({ addedComment }) => {
        this.setState(currentState => {
          return { comments: [addedComment, ...currentState.comments] };
        });
      })
      .catch(err => {
        this.setState({
          errMsg: "Can't add that comment right now, please try again later!"
        });
      });
  };
  rerender = () => {
    this.addComments();
  };
}

export default Comments;
