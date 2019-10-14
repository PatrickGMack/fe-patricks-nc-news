const axios = require('axios');

export const fetchTopics = async () => {
  const topics = await axios.get(
    'https://patricks-nc-news.herokuapp.com/api/topics'
  );
  return topics.data.topics;
};
