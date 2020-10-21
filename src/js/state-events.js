export function dispatchNewQuery(query) {
  const galleryIdx = state.findIndex(x => x.name === 'gallery');
  state[galleryIdx].currentQuery = query;
  state[galleryIdx].currentPage = 1;
  window.dispatchEvent(new Event('querydispatched'));
}

export function dataFetched(data) {
  const galleryIdx = state.findIndex(x => x.name === 'gallery');
  state[galleryIdx].data = data;
  window.dispatchEvent(new Event('datafetched'));
}

export function dispatchNewPage(delta) {
  const galleryIdx = state.findIndex(x => x.name === 'gallery');
  state[galleryIdx].currentPage += delta;
  window.dispatchEvent(new Event('querydispatched'));
}
