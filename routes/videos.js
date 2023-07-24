const router = require('express').Router();
const { getAll, getOne, create, onUpdate, onDelete } = require('../controllers/videos');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.patch('/:id', onUpdate);
router.delete('/:id', onDelete);

module.exports = router;