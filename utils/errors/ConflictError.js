const { CONFLICT_409 } = require('../constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConflictError';
    this.statusCode = CONFLICT_409;
  }
}

module.exports = ConflictError;
