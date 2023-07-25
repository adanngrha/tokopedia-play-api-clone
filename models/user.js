const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    url_avatar: {
        type: String,
        trim: true,
        maxlength: 100
    },
});

module.exports = mongoose.model('User', userSchema);