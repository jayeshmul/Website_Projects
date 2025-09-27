// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#111";
    nav.style.transition = "0.3s";
  } else {
    nav.style.background = "black";
  }
});

// Cart button action
document.querySelector(".cart-icon").addEventListener("click", () => {
  alert("🛍️ Your cart is empty!");
});
