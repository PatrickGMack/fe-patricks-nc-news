import React from 'react';
import Article from './Article';
import Comments from './Comments';

const SingleArticlePage = props => {
  return (
    <div className="SingleArticlePage">
      <Article articleId={props.articleId} />
      <Comments articleId={props.articleId} user={props.user} />
    </div>
  );
};

export default SingleArticlePage;
