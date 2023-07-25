const Video = require('../models/video');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
  try {
    const videos = await Video.find();
    
    return res.status(200).json({'videos': videos});
  }
  catch (err) {
    return res.status(500).json({ 'message': err.message });
  }
};

exports.getOne = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);

        return res.status(200).json({'video': video});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
    }
}

exports.create = async (req, res) => {
    try {
        const { title, description, url_video, url_thumbnail } = req.body;
        const id = uuidv4();
        const video = await Video.create(
            { _id: id, title, description, url_video, url_thumbnail });

        return res.status(201).json({'message': 'Video added successfully', 'video': video});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
    }
}

exports.onUpdate = async (req, res) => {
    try {
        const { title, description, url_video, url_thumbnail } = req.body;
        const video = await Video.findByIdAndUpdate(req.params.id,
            { title, description, url_video, url_thumbnail });

        return res.status(200).json({'message': 'Video updated successfully', 'video': video});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
    }
}

exports.onDelete = async (req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id);

        return res.status(200).json({'message': 'Video deleted successfully'});
    }
    catch (err) {
        return res.status(500).json({ 'message': err.message });
    }
}