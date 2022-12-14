import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryListEl: document.querySelector(".gallery"),
};

const creatMarkupOfGalleryItems = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
   <a class="gallery__item" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
};

refs.galleryListEl.innerHTML = creatMarkupOfGalleryItems(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});
