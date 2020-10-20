export function dispatchNewQuery(query) {
  state.currentQuery = query;
  state.currentPage = 1;
  window.dispatchEvent(new Event('querydispatched'));
}

export function dataFetched(data) {
  state.data = data;
  window.dispatchEvent(new Event('datafetched'));
}

export function dispatchNewPage(delta) {
  state.currentPage += delta;
  window.dispatchEvent(new Event('querydispatched'));
}
