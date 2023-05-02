const User = require('../models/user');

const createUsers = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({
      message: 'Ошибка',
    }));
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({
      message: 'Ошибка',
    }));
};

const getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({
      message: 'Ошибка',
    }));
};

module.exports = {
  createUsers,
  getUsers,
  getUserById,
};
