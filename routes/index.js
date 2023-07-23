const router = require('express').Router();

const userRouter = require('./users');
const videoRouter = require('./videos');

router.use('/users', userRouter);
router.use('/videos', videoRouter);

module.exports = router;