const router = require('express').Router();

const { getAll, create, onDelete } = require('../controllers/comments');
const {authentication} = require("../middlewares/auth");

router.get('/:videoId/comments', getAll);
router.post('/:videoId/comments', authentication, create);
router.delete('/:videoId/comments/:commentId', authentication, onDelete);

module.exports = router;