import { dispatchNewPage } from './state-events';

const buttonPrev = document.querySelector('#button-prev');
const buttonNext = document.querySelector('#button-next');

function buttonPrevHandler() {
  dispatchNewPage(-1);
}

function buttonNextHandler() {
  dispatchNewPage(+1);
}

export function setupPaginationButtons() {
  buttonPrev.addEventListener('click', buttonPrevHandler);
  buttonNext.addEventListener('click', buttonNextHandler);
}