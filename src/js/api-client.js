/* eslint-disable no-console */
import Unsplash, { toJson } from 'unsplash-js';
import fetch from 'node-fetch';
import { dataFetched } from './state-events';
import config from './config';

global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: config.unsplash.accesskey });

export default async function fetchPictures() {
  unsplash.search.photos(state.currentQuery, state.currentPage, 10, { orientation: 'portrait' })
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
      dataFetched(filteredJson);
    })
    .catch(err => console.log(err));
}
