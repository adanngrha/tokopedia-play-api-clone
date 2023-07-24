const Video = require('../models/video');

exports.getAll = async (req, res) => {
  try {
    const videos = await Video.find();
    
    return res.status(200).json({'data': videos});
  }
  catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getOne = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);

        return res.status(200).json({'data': video});
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.create = async (req, res) => {
    try {
        const { title, description, url_video, url_thumbnail } = req.body;
        const video = await Video.create(
            { title, description, url_video, url_thumbnail });

        return res.status(201).json({'message': 'Video added successfully', 'data': video});
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.onUpdate = async (req, res) => {
    try {
        const { title, description, url_video, url_thumbnail } = req.body;
        const video = await Video.findByIdAndUpdate(req.params.id,
            { title, description, url_video, url_thumbnail });

        return res.status(200).json({'message': 'Video updated successfully', 'data': video});
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.onDelete = async (req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id);

        return res.status(200).json({'message': 'Video deleted successfully'});
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}