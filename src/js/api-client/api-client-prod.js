/* eslint-disable no-console */
import axios from 'axios';
import { dataFetched } from '../state-events';

const endPoint = 'https://limitless-hollows-13414.herokuapp.com/api/unsplash';

export default function fetchPictures() {
  const galleryIdx = state.findIndex(x => x.name === 'gallery');

  console.log(state[galleryIdx].currentQuery, state[galleryIdx].currentPage);
  axios.get(`${endPoint}/${state[galleryIdx].currentQuery}?p=${state[galleryIdx].currentPage}`, { crossdomain: true })
    .then(x => {
      dataFetched(x.data.results);
      console.log(x);
    })
    .catch(err => { console.log(err); });
}
