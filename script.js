// ================= IMAGE MODAL =================

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

const galleryImages = document.querySelectorAll(
    ".gallery-item img, .portfolio-page, .profile-image img, .education-image img"
);

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        modal.classList.add("active");
        modalImage.src = image.src;
        modalImage.alt = image.alt;

    });

});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


// กด ESC เพื่อปิดรูป
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modal.classList.remove("active");
    }

});


// ================= NAVBAR SHADOW =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.style.boxShadow =
            "0 5px 20px rgba(180, 60, 110, 0.15)";
    } else {
        navbar.style.boxShadow =
            "0 3px 15px rgba(190, 70, 120, 0.08)";
    }

});
