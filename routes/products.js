const router = require('express').Router();
const { getAll } = require('../controllers/products');

router.get('/:videoId/products', getAll);

module.exports = router;