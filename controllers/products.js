const Product = require('../models/product');

exports.getAll = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const products = await Product.find({ video_id: videoId });

        return res.status(200).json({'data': products});
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}