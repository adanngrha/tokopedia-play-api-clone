const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    url_video: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    url_thumbnail: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Video', videoSchema);