const router = require('express').Router();
const routerCards = require('./cards');
const routerUsers = require('./users');

router.use('/users', routerUsers);
router.use('/cards', routerCards);

module.exports = router;
