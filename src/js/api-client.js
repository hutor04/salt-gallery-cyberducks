import { config } from './config';
import axios from 'axios';

const endPoint = `${window.location.protocol}//${window.location.host}${config.apiUnsplash}`;

export async function fetchPictures(query, p=1) {
  try {
    const data = await axios.get(`${endPoint}/${query}?p=${p}`);
    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.log(err);
  }
}
