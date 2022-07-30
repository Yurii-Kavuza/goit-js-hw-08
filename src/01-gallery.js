import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

//console.log(galleryItemsTmpl);

// function createGalleryMarkup(data) {
//     return data.map(({ preview, original, description }) => {
//         return `<li>
//         <a class="gallery__item" href=${original}>
//         <img class="gallery__image" src="${preview}" alt="${description}"/>
//         </a>
//         </li>`}).join("");
// }

function createGalleryMarkup(data) {
    return data.reduce((acc, { preview, original, description }) => {
        return acc + `<li>
        <a class="gallery__item" href=${original}>
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        </li>`}, "");
}

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

const gallery = new SimpleLightbox(".gallery__item", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

