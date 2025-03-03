document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.getElementById("nav-mobile-action");
  const navTarget = document.getElementById("nav-mobile-target");

  navButton.addEventListener("click", function () {
    navTarget.classList.toggle("nav--mobile");
  });
});
