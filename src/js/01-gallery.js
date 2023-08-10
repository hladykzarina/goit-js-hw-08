// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

//Сделать рефакторинг
const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery_item">
        <a class="gallery_link" href="${original}">
        <img
        class="gallery_image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width="350"
        height="auto"
        />
        </a>
        </li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', openModal);

function openModal(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery_image')) {
    return;
  }

  const modalImg = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${modalImg}" width="800" height="600">`,
    {
      onShow: instance => {
        document.addEventListener('keydown', closeModal);
      },

      onClose: instance => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );

  instance.show();

  function closeModal(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
//Конец рефакторинга

console.log(galleryItems);
