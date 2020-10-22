require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const unsplash = require('./api-route');

const app = express();

const port = process.env.PORT || 80;

//app.use(cors());
app.use(bodyParser.json());
app.use('/api/unsplash', unsplash);
app.use((req, res) => {
  res.status(404).json({ error: 'Not found.' });
});

module.exports.app = app;
if (!module.parent) { app.listen(port); }
