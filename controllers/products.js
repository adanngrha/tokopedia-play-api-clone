const Product = require('../models/product');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const products = await Product.find({ video_id: videoId });

        return res.status(200).json({
            'status': 'success',
            'message': 'products successfully fetched',
            'data': products
        });
    }
    catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message
        });
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

        return res.status(201).json({
            'status': 'success',
            'message': 'product successfully created',
            'data': newProduct
        });
    }
    catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message
        });
    }
}

exports.onDelete = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);

        if (!product) {
            return res.status(404).json({
                'status': 'failed',
                'message': 'product not found'
            });
        }

        await Product.findByIdAndDelete(req.params.productId);

        return res.status(200).json({
            'status': 'success',
            'message': 'product successfully deleted'
        });
    } catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message
        });
    }
}