import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")
console.log(galleryEl);

const cartMarkup = galleryItems
    .map((preview, original, description) => {
   return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}."
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
    
galleryEl.insertAdjacentHTML("beforeend", cartMarkup);
console.log(cartMarkup);
