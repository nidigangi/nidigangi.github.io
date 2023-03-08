// desplazar hacia arriba 

const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 10,
    behavior: "smooth",
  });
});

nav-link.addEventListener("click", () => {
window.scrollTo ({
    top: 0,
    left: 10,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

<script src="https://kit.fontawesome.com/aa4463a2bb.js" crossorigin="anonymous"></script>