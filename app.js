const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const handleError = require('./utils/handleErrors');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(handleError);
app.use(router);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
