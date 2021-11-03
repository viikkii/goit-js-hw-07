import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createElementsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


function createElementsMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
             class="gallery__image"
             src="${preview}."
             data-source="${original}"
             alt="${description}"
             />
            </a>
            </div>`;
        }).join("")
};

galleryContainer.addEventListener("click", selectGallery);

    const instance = basicLightbox.create(`
<img class="gallery__link" src="${selectGallery}">`, {
        onShow: (instance) => {
           window.addEventListener("keydown", handClick);
        },
        onClose: (instance) => {
           window.removeEventListener("keydown", handClick);
        }
    })

function selectGallery(event) {
    event.preventDefault();
    const selectGallery = event.target.dataset.source;

    if (event.target.className !== "gallery__image") {
        console.log(event.target.className);
        return;
    }
    instance.show();  
    instance.element().querySelector(".gallery__link").src = selectGallery;
    
    };

    
   function handClick(evt) {
        if (evt.keyCode === 27) {
            instance.close()
            return;
        }
    }