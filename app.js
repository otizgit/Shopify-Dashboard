const setupBtn = document.querySelector(".setup-btn");
const setupIntroContainer = document.querySelector(".setup-intro-container");
const hiddenContentWrapper = document.querySelector(".hidden-content-wrapper");

setupBtn.addEventListener("click", () => {
  setupBtn.classList.toggle("rotate-btn");
  setupIntroContainer.classList.toggle("reveal-margin");
  hiddenContentWrapper.classList.toggle("show-content");
});

hiddenContentWrapper.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("setup-select-btn-container")) {
    const toggleContents = document.querySelectorAll(".toggle-content");
    const setupContents = document.querySelectorAll(".setup-content");
    const setupImages = document.querySelectorAll(".setup-img");
    toggleContents.forEach((content) => {
      content.classList.add("hidden-content");
    });
    setupContents.forEach((content) => {
      content.classList.add("hidden-setup");
    });
    setupImages.forEach((img) => {
      img.classList.add("remove-img");
    });

    const setupContent = target.parentElement.parentElement;
    const toggleContent = setupContent.querySelector(".toggle-content");
    const setupMargin = setupContent.querySelector(".setup-margin");
    const setupImg = setupContent.querySelector(".setup-img");

    setupContent.classList.remove("hidden-setup");
    toggleContent.classList.remove("hidden-content");
    setupMargin.classList.remove("reveal-setup-margin");
    setupImg.classList.remove("remove-img");
  }
});

const userContainer = document.querySelector(".user-container");
const storeWrapper = document.querySelector(".store-wrapper");
const notificationBox = document.querySelector(".notification-box");
const notificationBoxContainer = document.querySelector(
  ".notification-box-container"
);
const overlay = document.querySelector(".overlay");

userContainer.addEventListener("click", () => {
  if (notificationBoxContainer.classList.contains("show-wrapper")) {
    notificationBoxContainer.classList.remove("show-wrapper");
  }
  storeWrapper.classList.toggle("show-wrapper");
  overlay.classList.add("show-overlay");
});

notificationBox.addEventListener("click", () => {
  if (storeWrapper.classList.contains("show-wrapper")) {
    storeWrapper.classList.remove("show-wrapper");
  }
  notificationBoxContainer.classList.toggle("show-wrapper");
  overlay.classList.add("show-overlay");
});


const hideOverlays = () => {
  overlay.classList.remove("show-overlay");
  storeWrapper.classList.remove("show-wrapper");
  notificationBoxContainer.classList.remove("show-wrapper");
};

overlay.addEventListener("click", hideOverlays);

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    hideOverlays();
  }
});
