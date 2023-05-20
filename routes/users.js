const router = require('express').Router();
const {
  getMe, getUsers, getUserById, updateAvatarUser, updateProfileUser,
} = require('../controllers/users');
const {
  validateIdData, validateUpdationInfoData, validateAvatarData,
} = require('../middlewares/validation/userValidate');

router.get('/me', getMe);
router.get('/', getUsers);
router.get('/:id', validateIdData, getUserById);
router.patch('/me/avatar', validateAvatarData, updateAvatarUser);
router.patch('/me', validateUpdationInfoData, updateProfileUser);

module.exports = router;
