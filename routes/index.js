const router = require('express').Router();

const userRouter = require('./users');
const videoRouter = require('./videos');
const productRouter = require('./products');

router.use('/users', userRouter);
router.use('/videos', videoRouter);
router.use('/videos', productRouter);

module.exports = router;