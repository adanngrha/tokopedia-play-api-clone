const router = require('express').Router();
const { getAll, getOne, create, onUpdate, onDelete } = require('../controllers/videos');
const {authentication} = require("../middlewares/auth");

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', authentication, create);
router.patch('/:id', authentication, onUpdate);
router.delete('/:id', authentication, onDelete);

module.exports = router;