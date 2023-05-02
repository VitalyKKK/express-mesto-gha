const router = require('express').Router();
const {
  createUsers, getUsers, getUserById,
} = require('../controllers/users');

router.post('/', createUsers);
router.get('/', getUsers);
router.get('/:id', getUserById);

module.exports = router;
