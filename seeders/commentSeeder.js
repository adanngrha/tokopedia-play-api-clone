const { v4: uuidv4 } = require('uuid');

exports.seedComments = [
    {
        _id: `comment-${uuidv4()}`,
        video_id: 'video-RlzJ6hbsaQo',
        username: 'adann',
        comment: 'This is a comment',
    },
    {
        _id: `comment-${uuidv4()}`,
        video_id: 'video-RlzJ6hbsaQo',
        username:  'jake',
        comment: 'This is another comment',
    },
    {
        _id: `comment-${uuidv4()}`,
        video_id: 'video-RlzJ6hbsaQo',
        username: 'amber',
        comment: 'This is a comment 2',
    },
    {
        _id: `comment-${uuidv4()}`,
        video_id: 'video-RlzJ6hbsaQo',
        username:  'matt',
        comment: 'This is another comment 2',
    },
    {
        _id: `comment-${uuidv4()}`,
        video_id: 'video-6Q5xqNkCk7w',
        username: 'adann',
        comment: 'This is a comment',
    },
    {
        _id: `comment-${uuidv4()}`,
        video_id: 'video-6Q5xqNkCk7w',
        username:  'amber',
        comment: 'This is another comment',
    },
    {
        _id: `comment-${uuidv4()}`,
        video_id: 'video-6Q5xqNkCk7w',
        username: 'lovi',
        comment: 'This is a comment 2',
    },
];