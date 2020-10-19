const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const unsplash = require('./api-route');

const app = express();

const port = 3000;


app.use(bodyParser.json());
app.use('/api/unsplash', unsplash);
app.use('/', express.static(path.join(__dirname, '../dist')));


module.exports.app = app;
if (!module.parent) { app.listen(port); }