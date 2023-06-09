const { BAD_REQUEST_400 } = require('../constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = BAD_REQUEST_400;
  }
}

module.exports = BadRequestError;
