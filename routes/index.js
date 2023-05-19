const router = require('express').Router();
const routerCards = require('./cards');
const routerUsers = require('./users');
const { NOT_FOUND_404 } = require('../utils/constants');
const { createUsers, login } = require('../controllers/users');
const { auth } = require('../middlewares/auth');

console.log(auth);
router.use('/users', auth, routerUsers);
router.use('/cards', auth, routerCards);
router.post('/signin', login);
router.post('/signup', createUsers);
router.use('*', auth, (req, res) => {
  res.status(NOT_FOUND_404).send({
    message: 'Страница не найдена',
  });
});

module.exports = router;
