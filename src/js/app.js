/* eslint-disable no-unused-vars */
import setupSearchForm from './search-handler';
import fetchPictures from './api-client';
import drawGallery from './draw-gallery';
import setupPaginationButtons from './pagination-handler';
import css from '../public/css/style.css';

window.addEventListener('querydispatched', () => {
  fetchPictures(state.currentQuery, state.currentPage);
});

window.addEventListener('datafetched', () => {
  drawGallery(state.data);
  window.history.pushState(state, 'Unsplash Gallery', '/');
  localStorage.setItem('state', JSON.stringify(state));
});

function setup() {
  setupSearchForm();
  const prevState = localStorage.getItem('state');
  if (prevState) {
    window.state = JSON.parse(prevState);
    drawGallery(state.data);
  } else {
    window.state = {
      data: {},
      currentQuery: '',
      currentPage: 0,
    };
  }
  setupPaginationButtons();
}

window.onload = setup();
