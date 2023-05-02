const routerCard = require('express').Router();

const {
  createCard, getCards, deleteCard,
} = require('../controllers/cards');

routerCard.post('/', createCard);
routerCard.get('/', getCards);
routerCard.delete('/:id', deleteCard);

module.exports = routerCard;
