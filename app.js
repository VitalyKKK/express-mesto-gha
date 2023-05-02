const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '645172659a5c6e39eda9b2f0',
  };

  next();
});

app.use(router);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
