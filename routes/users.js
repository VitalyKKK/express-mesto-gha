const router = require('express').Router();
const {
  getMe, getUsers, getUserById, updateAvatarUser, updateProfileUser,
} = require('../controllers/users');

router.get('/me', getMe);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me/avatar', updateAvatarUser);
router.patch('/me', updateProfileUser);

module.exports = router;
