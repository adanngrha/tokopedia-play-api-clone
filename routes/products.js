const router = require('express').Router();
const { getAll, create, onDelete } = require('../controllers/products');
const {authentication} = require("../middlewares/auth");

router.get('/:videoId/products', getAll);
router.post('/:videoId/products', authentication, create);
router.delete('/:videoId/products/:productId', authentication, onDelete);

module.exports = router;