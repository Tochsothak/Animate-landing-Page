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
// Element to animate

const heroHeading = document.querySelector(".hero h1");
const heroParagraph = document.querySelector(".hero p");
const heroButton = document.querySelector(".hero .btn");
const featureList = document.querySelector(".feature-list");
// console.log(heroHeading, heroParagraph, heroButton, featureList);

//Scroll Events Listener
window.addEventListener("scroll", () => {
    //Animate hero content
    if (isInViewport(heroHeading)) {
        heroHeading.style.opacity = "1";
        heroHeading.style.tranform = "translateY(0)";
    }
    if (isInViewport(heroParagraph)) {
        heroParagraph.style.opacity = "1";
        heroParagraph.style.transform = "translateY(0)";
    }
    if (isInViewport(heroButton)) {
        heroButton.style.opacity = "1";
        heroButton.style.transform = "transalteY(0)";
    }

    //Animate features
    if (isInViewport(featureList)) {
        featureList.style.opacity = "1";
    }
});