const { v4: uuidv4 } = require('uuid');

exports.seedUsers = [
    {
        _id: `user-${uuidv4()}`,
        username: 'admin',
        email: 'admin@example.com',
        password: '',
        url_avatar: 'https://ui-avatars.com/api/?name=admin',
    },
    {
        _id: `user-${uuidv4()}`,
        username: 'adan',
        email: 'adan@example.com',
        password: '',
        url_avatar: 'https://ui-avatars.com/api/?name=adan',
    },
];