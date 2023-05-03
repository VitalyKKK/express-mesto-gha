const User = require('../models/user');
const handleError = require('../utils/handleErrors');
const NotFoundError = require('../utils/notFoundError');

const createUsers = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch((error) => {
      handleError(error, res);
    });
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((error) => {
      handleError(error, res);
    });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Такого пользователя не существует');
      }
      res.send(user);
    })
    .catch((error) => {
      handleError(error, res);
    });
};

const updateProfileUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send(user))
    .catch((error) => {
      handleError(error, res);
    });
};

const updateAvatarUser = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send(user))
    .catch((error) => {
      handleError(error, res);
    });
};

module.exports = {
  createUsers,
  getUsers,
  getUserById,
  updateAvatarUser,
  updateProfileUser,
};
