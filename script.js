// ================= IMAGE GALLERY =================

const galleryImages = document.querySelectorAll(
  ".gallery-card img, .single-gallery img"
);

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".modal-close");


galleryImages.forEach((image) => {

  image.addEventListener("click", () => {

    modalImage.src = image.src;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

  });

});


function closeModal() {

  modal.classList.remove("show");

  document.body.style.overflow = "";

}


closeButton.addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    closeModal();
  }

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});


// ================= NAVBAR =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 8px 30px rgba(100,30,60,.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

});
