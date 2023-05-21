const mongooseError = require('mongoose').Error;
const NotFoundError = require('../utils/errors/notFoundError');
const { BAD_REQUEST_400, INTERNAL_SERVER_ERROR_500 } = require('../utils/constants');
const UnauthorizedError = require('../utils/errors/UnauthorizedError');
const ForbiddenError = require('../utils/errors/ForbiddenError');
const ConflictError = require('../utils/errors/ConflictError');

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
  if (error instanceof ConflictError) {
    res.status(error.statusCode).send({ message: error.message });
    return;
  }
  res.status(INTERNAL_SERVER_ERROR_500).send({ message: `${error.message}` });
  next();
}

module.exports = handleError;
