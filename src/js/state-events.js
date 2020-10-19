export function dispatchNewQuery(query) {
  state.currentQuery = query;
  state.currePage = 1;
  window.dispatchEvent(new Event('querydispatched'));
}

export function dataFetched(data) {
  state.data = data;
  window.dispatchEvent(new Event('datafetched'));
}