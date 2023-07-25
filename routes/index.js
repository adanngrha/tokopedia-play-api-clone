const router = require('express').Router();

const userRouter = require('./users');
const videoRouter = require('./videos');
const productRouter = require('./products');
const commentRouter = require('./comments');

router.use('/users', userRouter);
router.use('/videos', videoRouter);
router.use('/videos', productRouter);
router.use('/videos', commentRouter);

module.exports = router;