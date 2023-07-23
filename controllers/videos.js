const Video = require('../models/video');

exports.getAll = async (req, res) => {
  try {
    const videos = await Video.find();
    
    return res.status(200).json(videos);
  }
  catch (err) {
    return res.status(500).json({ message: err.message });
  }
};