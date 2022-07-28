import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryDivEl: document.querySelector(".gallery"),
};

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

let instance;
function onEscKeydown(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    instance.close();
  }
}

const onGalleryItemClick = (event) => {
  event.preventDefault();
  instance = basicLightbox.create(
    `<img src = ${event.target.dataset.source} />`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeydown);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeydown);
      },
    }
  );
  instance.show();
};

refs.galleryDivEl.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);
refs.galleryDivEl.addEventListener("click", onGalleryItemClick);
