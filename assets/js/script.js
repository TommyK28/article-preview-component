console.log("Version: 0.0.1");

document.addEventListener("DOMContentLoaded", () => {
    const shareButtons = document.querySelectorAll(".card__button");
    const cardElement = document.querySelector(".card");
    const sharePanel = document.getElementById("share-panel");

    shareButtons.forEach((shareButton) => {
        shareButton.addEventListener("click", () => {
            const isActive = cardElement.classList.toggle("share-active");

            shareButton.setAttribute("aria-expanded", isActive);
            sharePanel.setAttribute("aria-hidden", !isActive);
        });
    });
});
