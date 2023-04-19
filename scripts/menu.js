document.querySelector(".menu-button").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("show");
  document.querySelector(".menu-button").classList.toggle("close-icon");
});

const navItems = document.querySelectorAll(".mobile-menu li a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.toggle("show");
    document.querySelector(".menu-button").classList.toggle("close-icon");
  });
});
