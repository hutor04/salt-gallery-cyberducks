const cardsContainer = document.querySelector('.content-container');

export async function drawGallery(data) {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.lastChild);
  }
  data.forEach(el => {
    let card = document.createElement('article');
    card.className += 'card';
    card.innerHTML = `
    <img class="card-image" src="${el.urls.regular}">
    <div class="card-body">
        <div class="card-content">
          ${el.alt_description}
        </div>
    </div>
    `;
    cardsContainer.appendChild(card);
  });
}