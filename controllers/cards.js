const Card = require('../models/card');

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => card.populate('owner'))
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({
      message: 'Ошибка',
    }));
};

const getCards = (req, res) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({
      message: 'Ошибка',
    }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .populate(['owner', 'likes'])
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({
      message: 'Ошибка',
    }));
};

module.exports = {
  createCard,
  getCards,
  deleteCard,
};
