const { v4: uuidv4 } = require('uuid');

exports.seedUsers = [
    {
        _id: `user-${uuidv4()}`,
        email: 'admin@example.com',
        password: 'admin123',
    },
    {
        _id: `user-${uuidv4()}`,
        email: 'adan@example.com',
        password: 'password123',
    },
];