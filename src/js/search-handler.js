import { dispatchNewQuery } from './state-events';

const searchForm = document.querySelector('#search-field');
const searchSuggestions = document.querySelector('#search-suggestions');
const searchButton = document.querySelector('#search-button');

function normalizeQuery(newQuery) {
  const query = newQuery.toLowerCase();
  return query;
}

function writeQuery(newQuery) {
  const query = normalizeQuery(newQuery);
  let queries = localStorage.getItem('queryHistory');
  if (!queries) {
    localStorage.setItem('queryHistory', JSON.stringify([(query)]));
  } else {
    queries = JSON.parse(queries);
    if (!queries.includes(query)) {
      queries.push(query);
      localStorage.setItem('queryHistory', JSON.stringify(queries));
    }
  }
}

function getQuerySuggestions(newQuery) {
  const query = normalizeQuery(newQuery);
  let queries = localStorage.getItem('queryHistory');
  if (!queries) {
    return [];
  }
  queries = JSON.parse(queries);
  const suggestions = queries.filter(el => el.startsWith(query));
  return suggestions;
}

function clearSuggestionList() {
  while (searchSuggestions.firstChild) {
    searchSuggestions.removeChild(searchSuggestions.lastChild);
  }
}

function searchFormHandler() {
  const currentValue = searchForm.value;
  const querySuggestions = getQuerySuggestions(currentValue);
  clearSuggestionList();
  querySuggestions.forEach(query => {
    const newItem = document.createElement('li');
    newItem.innerText = query;
    searchSuggestions.appendChild(newItem);
  });
  if (!currentValue) {
    clearSuggestionList();
  }
}

function searchSuggestionItemHandler(event) {
  searchForm.value = event.target.innerText;
  clearSuggestionList();
}

function searchHandler() {
  clearSuggestionList();
  writeQuery(searchForm.value);
  dispatchNewQuery(searchForm.value);
}

function hideSearchSuggestions() {
  searchSuggestions.style.display = 'none';
}

function showSearchSuggestions() {
  searchSuggestions.style.display = 'flex';
}

export default function setupSearchForm() {
  searchButton.addEventListener('click', searchHandler);
  searchForm.addEventListener('keyup', searchFormHandler);
  searchSuggestions.addEventListener('click', searchSuggestionItemHandler);
  searchForm.addEventListener('focus', showSearchSuggestions);
  searchForm.addEventListener('click', showSearchSuggestions);
  window.addEventListener('scroll', hideSearchSuggestions);
}
