exports.topicFormat = topic => {
  if (!topic) return 'Missing topic!';
  return topic[0].toUpperCase() + topic.slice(1);
};

exports.dateFormat = date => {
  if (!date) return 'Missing date!';
  const cutDate = date.slice(0, 10);
  return cutDate
    .split('-')
    .reverse()
    .join('-');
};
