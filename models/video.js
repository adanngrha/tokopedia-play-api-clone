const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model('Video', videoSchema);