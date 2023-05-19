const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.status(401).send({ message: 'Авторизуйтесь' });
    return;
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    res.status(401).send({ message: 'Авторизуйтесь' });
    return;
  }
  req.user = payload;
  next();
};

module.exports = { auth };
