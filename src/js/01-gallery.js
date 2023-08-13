// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery_item">
        <a class="gallery_link" href="${original}">
        <img
        class="gallery_image"
        src="${preview}"
        alt="${description}"
        />
        </a>
        </li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});

console.log('object');

//console.log(galleryItems);
