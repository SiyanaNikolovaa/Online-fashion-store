const slider = document.getElementById('priceSlider');
const priceValue = document.getElementById('priceValue');

slider.addEventListener('input', function() {
    priceValue.textContent = slider.value;
});
