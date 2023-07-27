const Video = require('../models/video');
const Product = require('../models/product');
const Comment = require('../models/comment');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
  try {
    const videos = await Video.find();
    
    return res.status(200).json({
        'status': 'success',
        'message': 'videos retrieved successfully',
        'data': videos
    });
  }
  catch (err) {
    return res.status(500).json({
        'status': 'failed',
        'message': 'videos retrieved failed',
    });
  }
};

exports.getOne = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);

        if (!video) {
            return res.status(404).json({
                'status': 'failed',
                'message': 'video not found',
            });
        }

        const products = await Product.find({ video_id: req.params.id });
        const comments = await Comment.find({ video_id: req.params.id });

        const objVideo = video.toObject();
        objVideo.products = products;
        objVideo.comments = comments;

        return res.status(200).json({
            'status': 'success',
            'message': 'video retrieved successfully',
            'data': objVideo
        });
    }
    catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message,
        });
    }
}

exports.create = async (req, res) => {
    try {
        const { title, description, url_video, url_thumbnail } = req.body;
        const id = `video-${uuidv4()}`;
        const video = await Video.create(
            { _id: id, title, description, url_video, url_thumbnail });

        return res.status(201).json({
            'status': 'success',
            'message': 'video created successfully',
            'data': video
        });
    }
    catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message,
        });
    }
}

exports.onUpdate = async (req, res) => {
    try {
        const { title, description, url_video, url_thumbnail } = req.body;
        const video = await Video.findByIdAndUpdate(req.params.id,
            { title, description, url_video, url_thumbnail });

        if (!video) {
            return res.status(404).json({
                'status': 'failed',
                'message': 'video not found',
            });
        }

        const updatedVideo = await Video.findById(req.params.id);

        return res.status(200).json({
            'status': 'success',
            'message': 'video updated successfully',
            'data': updatedVideo
        });
    }
    catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message,
        });
    }
}

exports.onDelete = async (req, res) => {
    try {

        const video = await  Video.findById(req.params.id);

        if (!video) {
            return res.status(404).json({
                'status': 'failed',
                'message': 'video not found',
            });
        }

        await Video.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            'status': 'success',
            'message': 'video deleted successfully',
        });
    }
    catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message,
        });
    }
}