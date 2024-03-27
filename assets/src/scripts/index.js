const $ = document;
const button = $.querySelector(".top-button");
const navbar = $.querySelector(".mid-nav");
const hamburgerMenu = $.querySelector(".hamburger-menu");
const navMobileList = $.querySelector(".nav-mobile");

const topToButton = () => {
  window.scrollTo(0, 0);
};

let lastScrollPosition = 0;
window.addEventListener("scroll", (event) => {
  let newScrollTop = $.documentElement.scrollTop;
  if (newScrollTop >= lastScrollPosition) {
    navbar.classList.add("hidden");
    button.classList.remove("active");
  } else {
    button.classList.add("active");
    navbar.classList.remove("hidden");
  }
  lastScrollPosition = newScrollTop;

  if (newScrollTop === 0) {
    button.classList.remove("active");
  }
});

hamburgerMenu.addEventListener("click", () => {
  navMobileList.classList.toggle("show");
});

button.addEventListener("click", topToButton);
