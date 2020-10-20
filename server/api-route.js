/* eslint-disable no-console */
const express = require('express');
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const fetch = require('node-fetch');

global.fetch = fetch;
const config = require('../config');

const router = express.Router();

const unsplash = new Unsplash({ accessKey: config.unsplash.accesskey });

router.get('/:query', (req, res) => {
  const pageNumber = req.query.p ? req.query.p : 1;
  const itemsPerPage = req.query.n ? req.query.n : 10;
  unsplash.search.photos(req.params.query, pageNumber, itemsPerPage, { orientation: 'portrait' })
    .then(toJson)
    .then(json => {
      const imageDataFiltered = json.results.map(result => ({
        id: result.id,
        description: result.description,
        alt_description: result.alt_description,
        urls: result.urls,
        tags: result.tags,
      }));
      const filteredJson = {
        total: json.total,
        total_pages: json.total_pages,
        results: imageDataFiltered,
      };
      res.json(filteredJson);
    })
    .catch(err => {
      console.log(err);
      res.json({ error: err.message });
    });
});

module.exports = router;
