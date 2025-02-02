// script.js
document.addEventListener('DOMContentLoaded', function() {
    const promoBanner = document.getElementById('promo-banner');
    const closeButton = document.getElementById('close-btn');

    // Check if the banner should be hidden
    if (localStorage.getItem('promoBannerClosed') === 'true') {
        promoBanner.style.display = 'none';
    }

    // Close button event listener
    closeButton.addEventListener('click', function() {
        promoBanner.style.display = 'none';
        localStorage.setItem('promoBannerClosed', 'true');
    });
});
