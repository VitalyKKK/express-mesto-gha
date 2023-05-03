const router = require('express').Router();
const {
  createUsers, getUsers, getUserById, updateAvatarUser, updateProfileUser,
} = require('../controllers/users');

router.post('/', createUsers);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me/avatar', updateAvatarUser);
router.patch('/me', updateProfileUser);

module.exports = router;
