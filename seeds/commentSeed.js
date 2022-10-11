const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'This is very true.',
        user_id: 1,
        post_id: 3,
    },

    {
        comment_text: 'I wish it could be done with an interactive app.',
        user_id: 2,
        post_id: 3,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;