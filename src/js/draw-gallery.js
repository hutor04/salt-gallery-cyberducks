const cardsContainer = document.querySelector('.content-container');

export async function drawGallery(data) {
  data.forEach(el => {
    let card = document.createElement('article');
    card.className += 'card';
    card.innerHTML = `
    <img class="card-image" src="${el.urls.thumb}">
    <div class="card-body">
        <div class="card-content">
          ${el.alt_description}
        </div>
    </div>
    `;
    cardsContainer.appendChild(card);
  });
}