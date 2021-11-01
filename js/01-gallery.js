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

function selectGallery(event) {
    event.preventDefault();
    const selectGallery = event.target.dataset.source;

    if (event.target.className !== "gallery__image") {
        console.log(event.target.className);
        return;
    };
        
    const instance = basicLightbox.create(`
<img width="1280" height="860" src="${selectGallery}">`, {
        onShow: (instance) => {
            instance.element().onclick = instance.close
        },
        onClose: (instance) => {
            instance.element().onclick = instance.close
        }       
    })

    instance.show()
    
    window.addEventListener("keydown", function handClick (e) {
    if (e.keyCode === 27) {
        instance.close()
        e.target.removeEventListener( "keydown", handClick, false );  
        } 
    },
        false)
}