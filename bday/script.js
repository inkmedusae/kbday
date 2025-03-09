const button = document.querySelector(".revealButton")
const cover = document.querySelector(".main")
const text = document.querySelector(".text")
button.addEventListener("click", () => {
    const visibility = cover.getAttribute('data-visible')
    if (visibility === "false") {
        cover.setAttribute("data-visible", true);
        text.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        cover.setAttribute("data-visible", false);
        text.setAttribute("aria-expanded", false)
    };
});