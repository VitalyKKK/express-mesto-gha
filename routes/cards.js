const routerCard = require('express').Router();

const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

routerCard.post('/', createCard);
routerCard.get('/', getCards);
routerCard.delete('/:id', deleteCard);
routerCard.put('/:id/likes', likeCard);
routerCard.delete('/:id/likes', dislikeCard);

module.exports = routerCard;
