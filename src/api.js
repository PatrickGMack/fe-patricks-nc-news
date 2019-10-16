const axios = require('axios');

const request = axios.create({
  baseURL: 'https://patricks-nc-news.herokuapp.com/api'
});

export const fetchTopics = async () => {
  const topics = await request.get('/topics');
  return topics.data.topics;
};

export const fetchArticles = async topic => {
  const articles = await request.get('/articles', { params: { topic } });
  return articles.data.articles;
};

export const fetchArticleById = async articleId => {
  const article = await request.get(`/articles/${articleId}`);
  return article.data.article;
};

export const fetchComments = async articleId => {
  const comments = await request.get(`/articles/${articleId}/comments`);
  return comments.data;
};

export const addComment = async (articleId, newCommentObj) => {
  const addedComment = await request.post(
    `/articles/${articleId}/comments`,
    newCommentObj
  );
  return addedComment.data;
};

export const deleteComment = async commentId => {
  const deleted = await request.delete(`/comments/${commentId}`);
  return deleted;
};
