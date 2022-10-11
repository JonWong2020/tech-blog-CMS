const { Post } = require('../models');

const postData = [
    {
        title: 'Why is coding so difficult?',
        content: 'Because it is like learning a new language.',
        user_id: 1
    },
    {
        title: 'How to surf the web',
        content: 'Start by using a search engine to find what you want',
        user_id: 2
    },
    {
        title: 'Model-View-Controller',
        content: 'It is hard to keep track of all the files at times and what routes to go where.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;