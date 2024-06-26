// script.js
document.addEventListener("DOMContentLoaded", () => {
  const priceRange = document.getElementById("priceRange");
  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");

  priceRange.addEventListener("input", () => {
    const value = priceRange.value;
    maxPrice.textContent = value;
  });

  document.querySelector(".apply-filters").addEventListener("click", () => {
    const selectedPrice = priceRange.value;
    console.log("Selected Price Range: 0 - " + selectedPrice);

    // Add your filtering logic here
    // Example: filterProductsByPrice(0, selectedPrice);
  });
});
