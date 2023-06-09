const http2 = require('http2');

const {
  HTTP_STATUS_NOT_FOUND: NOT_FOUND_404,
  HTTP_STATUS_BAD_REQUEST: BAD_REQUEST_400,
  HTTP_STATUS_INTERNAL_SERVER_ERROR: INTERNAL_SERVER_ERROR_500,
  HTTP_STATUS_CREATED: CREATED_201,
  HTTP_STATUS_UNAUTHORIZED: UNAUTHORIZED_401,
  HTTP_STATUS_FORBIDDEN: FORBIDDEN_403,
  HTTP_STATUS_CONFLICT: CONFLICT_409,
} = http2.constants;

const regExLink = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/im;

module.exports = {
  NOT_FOUND_404,
  BAD_REQUEST_400,
  INTERNAL_SERVER_ERROR_500,
  CREATED_201,
  UNAUTHORIZED_401,
  FORBIDDEN_403,
  CONFLICT_409,
  regExLink,
};
