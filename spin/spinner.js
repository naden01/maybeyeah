document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".spinner-overlay");
    if (overlay) {
        overlay.style.display = "none";
    }
    const headline = document.querySelector(".headline-container");
    if (headline) {
        headline.style.display = "block";
    }
});
