const router = require('express').Router();
const {
  createUsers, getUsers, getUserById, updateAvatarUser, updateProfileUser, login,
} = require('../controllers/users');

router.post('/signin', login);
router.post('/signup', createUsers);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me/avatar', updateAvatarUser);
router.patch('/me', updateProfileUser);

module.exports = router;
