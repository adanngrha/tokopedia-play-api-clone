const Comment = require('../models/comment');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const comments = await Comment.find({ video_id: videoId });

        return res.status(200).json({
            'status': 'success',
            'message': 'comments successfully fetched',
            'data': comments
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
        const id = `comment-${uuidv4()}`;
        const { username, comment } = req.body;

        const newComment = new Comment({
            _id: id,
            video_id: videoId,
            username,
            comment,
            date: new Date(),
        });
        const savedComment = await Comment.create(newComment);

        return res.status(201).json({
            'status': 'success',
            'message': 'comment successfully created',
            'data': savedComment
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
        const comment = await Comment.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({
                'status': 'failed',
                'message': 'Comment not found'
            });
        }

        if (comment.username !== req.username) {
            return res.status(403).json({
                'status': 'failed',
                'message': 'You are not authorized to delete this comment'
            });
        }

        await Comment.findByIdAndDelete(req.params.commentId);

        return res.status(200).json({
            'status': 'success',
            'message': 'comment successfully deleted',
        });
    } catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message
        });
    }
}