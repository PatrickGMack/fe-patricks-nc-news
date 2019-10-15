const { topicFormat, dateFormat } = require('../utils/utils');

describe('#topicFormat', () => {
  it('Returns "Missing topic!" when passed no argument', () => {
    expect(topicFormat()).toBe('Missing topic!');
  });
  it('Returns capitalised first letter when passed a topic', () => {
    expect(topicFormat('coding')).toBe('Coding');
    expect(topicFormat('football')).toBe('Football');
    expect(topicFormat('cooking')).toBe('Cooking');
  });
});

describe('#dateFormat', () => {
  it('Returns "Missing date!" when passed no aruments', () => {
    expect(dateFormat()).toBe('Missing date!');
  });
  it('Returns a correctly formatted date', () => {
    expect(dateFormat('2018-05-30T15:59:13.341Z')).toBe('30-05-2018');
    expect(dateFormat('2017-07-21T17:54:10.346Z')).toBe('21-07-2017');
    expect(dateFormat('2016-06-30T06:59:39.654Z')).toBe('30-06-2016');
  });
});
