const mongooseError = require('mongoose').Error;
const NotFoundError = require('./errors/notFoundError');
const { BAD_REQUEST_400, INTERNAL_SERVER_ERROR_500, CONFLICT_409 } = require('./constants');
const UnauthorizedError = require('./errors/UnauthorizedError');
const ForbiddenError = require('./errors/ForbiddenError');

function handleError(error, req, res, next) {
  if (
    error instanceof mongooseError.ValidationError
    || error instanceof mongooseError.CastError
  ) {
    res.status(BAD_REQUEST_400).send({ message: error.message });
    return;
  }
  if (error instanceof UnauthorizedError) {
    res.status(error.statusCode).send({ message: error.message });
    return;
  }
  if (error instanceof ForbiddenError) {
    res.status(error.statusCode).send({ message: error.message });
    return;
  }
  if (error instanceof NotFoundError) {
    res.status(error.statusCode).send({ message: error.message });
    return;
  }
  if (error.code === 11000) {
    res
      .status(CONFLICT_409)
      .send({ message: 'Указанный email уже зарегистрирован' });
    return;
  }
  res.status(INTERNAL_SERVER_ERROR_500).send({ message: `${error.message}` });
  next();
}

module.exports = handleError;
