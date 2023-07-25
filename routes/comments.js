const router = require('express').Router();

const { getAll, create, onDelete } = require('../controllers/comments');

router.get('/:videoId/comments', getAll);
router.post('/:videoId/comments', create);
router.delete('/:videoId/comments/:commentId', onDelete);

module.exports = router;