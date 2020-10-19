const express = require('express');
const bodyParser = require('body-parser');
const unsplash = require('./api-route');
const app = express();

app.use(bodyParser.json());
app.use('/api/unsplash', unsplash);

module.exports.app = app;
if (!module.parent) { app.listen(3000); }
console.log("Application started. Listening on port:" + port);