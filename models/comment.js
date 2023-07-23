const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    video_id: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    user_id: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    comment: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);