import { setupSearchForm } from './search-handler';
import { fetchPictures } from './api-client';
import { drawGallery } from './draw-gallery';
import css from '../public/css/style.css';

let state = {
  data: {},
  currentQuery: '',
  currentPage: 0,
  prevPage: 0,
  nextPage: 0,
};

window.addEventListener('querydispatched', () => {
  fetchPictures(state.currentQuery, state.currentPage)});

window.addEventListener('datafetched', () => {
  drawGallery(state.data);
  if (state.nextPage < state.data.total_pages) {
    nextPage = currentPage + 1;
  }
});

window.state = state;
window.onload = setupSearchForm();