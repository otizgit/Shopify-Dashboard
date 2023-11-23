const setupBtn = document.querySelector(".setup-btn");
const setupIntroContainer = document.querySelector(".setup-intro-container");
const hiddenContentWrapper = document.querySelector(".hidden-content-wrapper");

//? Collapsing and Expanding the setup:
setupBtn.addEventListener("click", () => {
  setupBtn.classList.toggle("rotate-btn");
  setupIntroContainer.classList.toggle("reveal-margin");
  hiddenContentWrapper.classList.toggle("show-content");
});

//! Handling the functionality of the accordion:
hiddenContentWrapper.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("setup-select-btn-container")) {
    const toggleContents = document.querySelectorAll(".toggle-content");
    const setupContents = document.querySelectorAll(".setup-content");
    const setupImages = document.querySelectorAll(".setup-img");
    const allSetupBtns = document.querySelectorAll(
      ".setup-select-btn-container"
    );
    toggleContents.forEach((content) => {
      content.classList.add("hidden-content");
    });
    setupContents.forEach((content) => {
      content.classList.add("hidden-setup");
    });
    setupImages.forEach((img) => {
      img.classList.add("remove-img");
    });

    allSetupBtns.forEach(btn => {
      btn.innerHTML = `
      <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#8A8A8A"
        stroke-width="2.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="5 5"
      />
      </svg>
      `
    })

    target.innerHTML = `
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
      <circle
      cx="12"
      cy="12"
      r="10"
      fill="#303030"
      ></circle>
      <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
      ></path>
    </svg>
    `;

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

//* Handling the functionality of the nav buttons:
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

// Running the hideOverlay function when we press the Esc key:
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    hideOverlays();
  }
});
