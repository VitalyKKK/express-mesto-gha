const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const handleError = require('../utils/handleErrors');
const NotFoundError = require('../utils/errors/notFoundError');
const { CREATED_201 } = require('../utils/constants');

const createUsers = async (req, res) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;
  const hash = await bcrypt.hash(password, 10);
  User.create({
    name,
    about,
    avatar,
    email,
    password: hash,
  })
    .then((user) => res.status(CREATED_201).send(user))
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

const login = (req, res) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', {
        expiresIn: '7d',
      });
      res.send({ token });
    })
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
  login,
};
