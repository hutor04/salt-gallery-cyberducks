const contentTitle = document.querySelector('.content-page h2');
const contentText = document.querySelector('.text');
const gallery = document.querySelector('.gallery');
const contentPage = document.querySelector('.content-page');

export default function setUpContentPage(state) {
  gallery.style.display = 'none';
  contentPage.style.display = 'block';
  contentTitle.innerText = state.title;
  contentText.innerText = state.content;
}
