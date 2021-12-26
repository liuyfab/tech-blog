const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1 from USER 10',
    post_text: 'This is post one. This is post one. This is post one.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'This is post one. This is post one. This is post one.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'This is post one. This is post one. This is post one.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'This is post one. This is post one. This is post one.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'This is post one. This is post one. This is post one.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
