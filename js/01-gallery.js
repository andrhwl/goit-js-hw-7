import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");


const createRenderGallery = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', createRenderGallery);

let instance;

function renderGallery(galleryItems) {
return galleryItems
 .map(({ preview, original, description }) => {
  return `<li class='gallery__item'>
      <a class='gallery__link' href='${original}'>
      <img
        class='gallery__image'
        src='${preview}'
        data-source='${original}'
        alt='${description}'/>
      </a>
      </li>`;
 })
 .join("");
}


galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const source = e.target.dataset.source;
  instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`,
  {
    onShow: (instance) => window.addEventListener("keydown", handleKeyPress),
    onClose: (instance) => window.removeEventListener("keydown", handleKeyPress),
  }
  
  );

    instance.show();
  
  })


function handleKeyPress (event)  {
  if (event.code === "Escape") {
    instance.close();
  }
}