const { Post } = require('../models');

const postData = [
  {
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
        username: 'detra'
    }
  },
  {
  post_url: 'https://notalwaysright.com/',
  title: 'Not Always Right',
  created_at: new Date(),
  vote_count: 12,
  comments: [{}, {}],
  user: {
      username: 'cevans'
  }
},
{
    post_url: 'https://www.coolthings.com/',
    title: 'Cool Things',
    created_at: new Date(),
    vote_count: 18,
    comments: [{}, {}],
    user: {
        username: 'detra'
    }
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;