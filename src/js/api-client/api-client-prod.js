/* eslint-disable no-console */
import axios from 'axios';
import { dataFetched } from '../state-events';

const endPoint = 'https://limitless-hollows-13414.herokuapp.com';

export default async function fetchPictures() {
  try {
    const data = await axios.get(`${endPoint}/${state.currentQuery}?p=${state.currentPage}`);
    dataFetched(data.data.results);
  } catch (err) {
    console.log(err);
  }
}
