const router = require('express').Router();

const videoRouter = require('./videos');

router.use('/videos', videoRouter)

module.exports = router;