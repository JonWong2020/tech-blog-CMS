const { User } = require('../models');

const usersData = [
    {
        username: 'Jon',
        password: 'random1234'
    },
    {
        username: 'Vince',
        password: 'persuasion1027'
    },
    {
        username: 'Luke',
        password: 'skywalker09'
    },
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;