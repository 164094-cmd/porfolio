// ================= IMAGE VIEWER =================

const cards = document.querySelectorAll(".work-card");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".close");

cards.forEach(card => {

  const image = card.querySelector("img");

  card.addEventListener("click", () => {

    modal.style.display = "flex";
    modalImage.src = image.src;

  });

});


closeButton.addEventListener("click", () => {

  modal.style.display = "none";

});


modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    modal.style.display = "none";
  }

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    modal.style.display = "none";
  }

});
