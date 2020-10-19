import { config } from './config';
import axios from 'axios';
import { dataFetched } from './state-events';

const endPoint = `${window.location.protocol}//${window.location.host}${config.apiUnsplash}`;

export async function fetchPictures(query, p=1) {
  try {
    const data = await axios.get(`${endPoint}/${query}?p=${p}`);
    dataFetched(data.data.results);
  } catch (err) {
    console.log(err);
  }
}
