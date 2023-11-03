// script.js
const progressBar = document.getElementById('progress');

// Function to calculate and update the scroll progress
function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (fullHeight - windowHeight)) * 100;
    progressBar.style.width = progress + '%';
}

// Add an event listener to update the progress bar on scroll
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);

// Initial update
updateProgressBar();
