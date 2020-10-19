import { setupSearchForm } from './search-handler';
import { fetchPictures } from './api-client';
import { drawGallery } from './draw-gallery';
import css from '../public/css/style.css';

let state = {
  data: {},
  currentQuery: '',
  currentPage: 0,
};

window.addEventListener('querydispatched', () => {
  fetchPictures(state.currentQuery, state.currentPage)});

window.addEventListener('datafetched', () => {
  drawGallery(state.data);
  window.history.pushState(state, 'Unsplash Gallery', '/');
  localStorage.setItem('state', JSON.stringify(state));
});

function setup() {
  window.state = state;
  setupSearchForm();
  let prevState = localStorage.getItem('state');
  if (prevState) {
    state = JSON.parse(prevState);
    drawGallery(state.data);
  }
}

window.onload = setup();