const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {
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
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 100
    },
    url_image: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    url_product: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    }
});

module.exports = mongoose.model('Product', productSchema);