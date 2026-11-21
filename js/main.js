
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Hero Slideshow
    // =========================

    const images = document.querySelectorAll(
        ".image__animation img"
    );

    if (images.length > 0) {

        let currentIndex = 0;

        images[currentIndex].classList.add("is-active");

        setInterval(() => {

            images[currentIndex].classList.remove("is-active");

            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.add("is-active");

        }, 5000);
    }

    // =========================
    // Hero Text Animation
    // =========================

    const heroContent = document.querySelector(".hero__content");

    if (heroContent) {

        setTimeout(() => {
            heroContent.classList.add("is-visible");
        }, 300);

    }

});
