const routerCard = require('express').Router();

const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const {
  validateCardData, validateCardId,
} = require('../middlewares/validation/cardValidate');

routerCard.post('/', validateCardData, createCard);
routerCard.get('/', getCards);
routerCard.delete('/:id', validateCardId, deleteCard);
routerCard.put('/:id/likes',validateCardId, likeCard);
routerCard.delete('/:id/likes', validateCardId, dislikeCard);

module.exports = routerCard;
