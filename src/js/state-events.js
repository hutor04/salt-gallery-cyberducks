export function queryDispatched(query) {
  state.currentQuery = query;
  state.currePage = 1;
  state.prevPage = 0,
  state.nextPage = 0,
  window.dispatchEvent(new Event('querydispatched'));
}

export function dataFetched(data) {
  state.data = data;
  window.dispatchEvent(new Event('datafetched'));
}