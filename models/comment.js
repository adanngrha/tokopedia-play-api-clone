const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    _id :{
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    video_id: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    username: {
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