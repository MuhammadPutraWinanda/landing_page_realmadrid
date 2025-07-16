const button = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
