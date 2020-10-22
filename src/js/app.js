/* eslint-disable no-unused-vars, no-use-before-define */
import setupSearchForm from './search-handler';
import setUpContentPage from './content-page';
import fetchPictures from './api-client';
import drawGallery from './draw-gallery';
import setupPaginationButtons, { buttonDisabler } from './pagination-handler';
import css from '../public/css/style.scss';

const menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
  const page = e.target.id;
  const pageIdx = state.findIndex(x => x.name === page);
  state = state.map(x => ({
    ...x,
    active: false,
  }));
  state[pageIdx].active = true;
  localStorage.setItem('state', JSON.stringify(state));
  reDrawApp();
});

window.addEventListener('querydispatched', () => {
  fetchPictures(state.currentQuery, state.currentPage);
});

window.addEventListener('datafetched', () => {
  const gallery = state.find(x => x.name === 'gallery');
  drawGallery(gallery.data);
  localStorage.setItem('state', JSON.stringify(state));
  buttonDisabler();
});

function setUpGallery() {
  const galleryIdx = state.findIndex(x => x.name === 'gallery');
  document.querySelector('.content-page').style.display = 'none';
  document.querySelector('.gallery').style.display = 'grid';
  setupSearchForm();
  if (state[galleryIdx].data) {
    drawGallery(state[galleryIdx].data);
  }
  setupPaginationButtons();
}

function reDrawApp() {
  const prevState = localStorage.getItem('state');
  if (prevState) {
    window.state = JSON.parse(prevState);
  } else {
    window.state = [
      {
        name: 'gallery',
        path: '/',
        title: 'Gallery',
        content: '',
        data: {},
        currentQuery: '',
        currentPage: 0,
        active: false,
      },
      {
        name: 'about',
        path: '/about',
        title: 'About Page',
        content: 'Loerm ipsum',
        active: true,
      },
    ];
  }
  const activePage = state.find(x => x.active === true);
  if (activePage.name === 'gallery') {
    setUpGallery(activePage);
  } else {
    setUpContentPage(activePage);
  }
}

window.onload = reDrawApp();
