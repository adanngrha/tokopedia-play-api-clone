const Comment = require('../models/comment');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const comments = await Comment.find({ video_id: videoId });

        return res.status(200).json({'comments': comments});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
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

        return res.status(201).json({'comment': savedComment});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
    }
}

exports.onDelete = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.commentId);

        return res.status(200).json({'message': 'Comment deleted successfully'});
    } catch (error) {
        return res.status(500).json({ 'message': error.message });
    }
}