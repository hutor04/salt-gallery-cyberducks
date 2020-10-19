import { config } from './config';
import axios from 'axios';
import { dataFetched } from './state-events';

const endPoint = `${window.location.protocol}//${window.location.host}${config.apiUnsplash}`;

export async function fetchPictures() {
  try {
    const data = await axios.get(`${endPoint}/${state.currentQuery}?p=${state.currentPage}`);
    dataFetched(data.data.results);
  } catch (err) {
    console.log(err);
  }
}
