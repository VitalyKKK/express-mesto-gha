const routerCard = require('express').Router();

const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const {
  validateCardData, validateIdCardData
} = require('../middlewares/validation/cardValidate');

routerCard.post('/', validateCardData, createCard);
routerCard.get('/', getCards);
routerCard.delete('/:id', deleteCard);
routerCard.put('/:id/likes',validateIdCardData, likeCard);
routerCard.delete('/:id/likes', dislikeCard);

module.exports = routerCard;
