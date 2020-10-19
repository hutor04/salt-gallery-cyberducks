import { fetchPictures } from './api-client';
const cardsContainer = document.querySelector('.content-container');

export async function drawGallery(query) {
  const data = await fetchPictures(query);
  const imageUrls = data.map(el => el.urls.thumb);
  imageUrls.forEach(url => {
    let card = document.createElement('article');
    card.className += 'card';
    card.innerHTML = `
    <img class="card-image" src="${url}">
    <div class="card-body">
        <div class="card-content">This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
        </div>
        <div class="card-footer">
            <div class="button-group">
                <a href="#">View</a>
                <a href="#">Buy</a>
            </div>
            <div class="small-text">9 mins</div>
            <div class="small-text">&#36; 0.99</div>
        </div>
    </div>
    `;
    cardsContainer.appendChild(card);
  });
}