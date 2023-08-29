const express = require('express');
const cors = require('cors');
const usersController = require('./controllers/usersController');
const { testErrorMiddleware } = require('./middlewares/testErrorMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use(testErrorMiddleware);

app.get('/', (req, res) => {
  res.status(200).json({ data: "Service is running "});
});

app.use('/users', usersController);

app.all('*', (req, res) => {
  res.status(404).json({ error: "Not found"});
})

module.exports = app;