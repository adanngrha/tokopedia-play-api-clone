const router = require('express').Router();
const videoController = require('../controllers/videos');

router.get('/', videoController.getAll);

module.exports = router;