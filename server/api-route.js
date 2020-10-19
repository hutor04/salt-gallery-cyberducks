const express = require('express');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const config = require('../config');
const router = express.Router();

const unsplash = new Unsplash({ accessKey: config.unsplash.accesskey });

router.get('/:query', (req, res) => {
  const pageNumber = req.query.p ? req.query.p : 1;
  unsplash.search.photos(req.params.query, pageNumber, 10, { orientation: "portrait"})
  .then(toJson)
  .then(json => {
    res.json(json);
  });
});

module.exports = router;
