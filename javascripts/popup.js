const projectContainers = document.querySelectorAll(".projectImageContainer");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup-image");
const popupTitle = document.querySelector(".popup-title");
const popupDescription = document.querySelector(".popup-description");
const popupLink = document.querySelector(".popup-link");
const closeButton = document.querySelector(".close-btn");

projectContainers.forEach(container => {
    container.addEventListener("click", () => {
        const imageSrc = container.querySelector("img").src;
        const title = container.getAttribute("data-title");
        const description = container.getAttribute("data-description");
        const link = container.getAttribute("data-link");

        popupImage.src = imageSrc;
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupLink.href = link || "#"; // Default to "#" if no link is provided

        popup.classList.add("active");
    });
});

// Close popup when clicking the close button
closeButton.addEventListener("click", () => {
    popup.classList.remove("active");
});

// Close popup when clicking outside the popup content
popup.addEventListener("click", (event) => {
    if (!event.target.closest(".popup-content")) {
        popup.classList.remove("active");
    }
});
