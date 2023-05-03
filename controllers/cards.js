const Card = require('../models/card');
const handleError = require('../utils/handleErrors');
const NotFoundError = require('../utils/notFoundError');

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => card.populate('owner'))
    .then((card) => res.send(card))
    .catch((error) => {
      handleError(error, res);
    });
};

const getCards = (req, res) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((cards) => res.send(cards))
    .catch((error) => {
      handleError(error, res);
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .populate(['owner', 'likes'])
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      res.send(card);
    })
    .catch((error) => {
      handleError(error, res);
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .populate(['owner', 'likes'])
    .then((card) => res.send(card))
    .catch((error) => {
      handleError(error, res);
    });
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .populate(['owner', 'likes'])
    .then((card) => res.send(card))
    .catch((error) => {
      handleError(error, res);
    });
};

module.exports = {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
};
