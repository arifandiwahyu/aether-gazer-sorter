const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for user preference in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Set initial dark mode state
if (isDarkMode) {
    enableDarkMode();
    darkModeToggle.checked = true;
} else {
    disableDarkMode();
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}
