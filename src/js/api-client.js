/* eslint-disable no-console */
import axios from 'axios';
import config from './config';
import { dataFetched } from './state-events';

const endPoint = `${window.location.protocol}//${window.location.host}${config.apiUnsplash}`;

export default async function fetchPictures() {
  try {
    const data = await axios.get(`${endPoint}/${state.currentQuery}?p=${state.currentPage}`);
    dataFetched(data.data.results);
  } catch (err) {
    console.log(err);
  }
}
