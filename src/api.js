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

// export const fetchArticles = async articleId => {
//   const articles = await request.get('/articles', { params: { articleId } });

//   return articles.data.articles;
// };
