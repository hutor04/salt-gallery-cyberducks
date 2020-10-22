const cardsContainer = document.querySelector('.content-container');

export default async function drawGallery(data) {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.lastChild);
  }
  data.forEach(el => {
    const card = document.createElement('article');
    card.className += 'card';
    card.innerHTML = `
    <div class="card-body">
      <div class="card-front">
        <img class="card-image" src="${el.urls.regular}">
      </div>
      <div class="card-back">
        <p>${el.alt_description}</p>
      </div>
    </div>
    `;
    cardsContainer.appendChild(card);
  });
}
