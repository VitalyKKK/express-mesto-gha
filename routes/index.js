const router = require('express').Router();
const routerCards = require('./cards');
const routerUsers = require('./users');
const NotFoundError = require('../utils/errors/notFoundError');
const { createUsers, login } = require('../controllers/users');
const { auth } = require('../middlewares/auth');

router.use('/users', auth, routerUsers);
router.use('/cards', auth, routerCards);
router.post('/signin', login);
router.post('/signup', createUsers);
router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
