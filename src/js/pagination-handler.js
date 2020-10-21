import { dispatchNewPage } from './state-events';

const buttonPrev = document.querySelector('#button-prev');
const buttonNext = document.querySelector('#button-next');

function buttonPrevHandler() {
  dispatchNewPage(-1);
}

function buttonNextHandler() {
  dispatchNewPage(+1);
}

export function buttonDisabler() {
  const galleryIdx = state.findIndex(x => x.name === 'gallery');
  if (state[galleryIdx].currentPage === 0) {
    buttonPrev.disabled = true;
    buttonNext.disabled = true;
  } else if (state[galleryIdx].currentPage === state[galleryIdx].data.total_pages) {
    buttonNext.disabled = true;
  } else if (state[galleryIdx].currentPage === 1) {
    buttonPrev.disabled = true;
  } else {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}

export default function setupPaginationButtons() {
  buttonPrev.addEventListener('click', buttonPrevHandler);
  buttonNext.addEventListener('click', buttonNextHandler);
}
