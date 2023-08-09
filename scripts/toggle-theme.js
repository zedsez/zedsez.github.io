document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.querySelector('.theme-toggle-button');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    // Check for saved theme in local storage and set it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
    } else {
        document.body.classList.remove('light');
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    }

    themeToggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('light')) {
            document.body.classList.remove('light');
            moonIcon.style.display = "none";
            sunIcon.style.display = "inline";
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light');
            moonIcon.style.display = "inline";
            sunIcon.style.display = "none";
            localStorage.setItem('theme', 'light');
        }
    });
});
