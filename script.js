function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Elements to animate
const heroHeading = document.querySelector(".hero h1");
const heroParagraph = document.querySelector(".hero p");
const heroButton = document.querySelector(".hero .btn");
const featureList = document.querySelector(".feature-list");
const contact = document.querySelector(".contact .btn");

// Scroll event listener
window.addEventListener("scroll", () => {
    // Animate hero content
    if (isInViewport(heroHeading)) {
        heroHeading.style.opacity = "1";
        heroHeading.style.transform = "translateY(0)";
    }
    if (isInViewport(heroParagraph)) {
        heroParagraph.style.opacity = "1";
        heroParagraph.style.transform = "translateY(0)";
    }
    if (isInViewport(heroButton)) {
        heroButton.style.opacity = "1";
        heroButton.style.transform = "translateY(0)";
    }

    // Animate features
    if (isInViewport(featureList)) {
        featureList.style.opacity = "1";
    }
    if (isInViewport(contact)) {
        contact.style.opacity = "1";
    }
});

// Scroll  Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});