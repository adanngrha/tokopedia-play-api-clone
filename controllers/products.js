const Product = require('../models/product');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const products = await Product.find({ video_id: videoId });

        return res.status(200).json({'products': products});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
    }
}

exports.create = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const id = `product-${uuidv4()}`;
        const { title, price, url_image, url_product } = req.body;
        const product = new Product({
            _id: id,
            video_id: videoId,
            title,
            price,
            url_image,
            url_product
        });
        const newProduct = await product.save();

        return res.status(201).json({'product': newProduct});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
    }
}

exports.onDelete = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.productId);

        return res.status(200).json({'message': 'Product deleted successfully'});
    } catch (error) {
        return res.status(500).json({ 'message': error.message });
    }
}