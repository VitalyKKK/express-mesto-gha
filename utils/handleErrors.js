const mongooseError = require('mongoose').Error;
const NotFoundError = require('./errors/notFoundError');
const { BAD_REQUEST_400, INTERNAL_SERVER_ERROR_500 } = require('./constants');
const UnauthorizedError = require('./errors/UnauthorizedError');

function handleError(error, res) {
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
  if (error instanceof NotFoundError) {
    res.status(error.statusCode).send({ message: error.message });
    return;
  }
  res.status(INTERNAL_SERVER_ERROR_500).send({ message: `${error.message}` });
}

module.exports = handleError;
