// Function to navigate to different pages
function navigateTo(page) {
    window.location.href = page;
}

// Initialize the menu highlighting logic if needed
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#menu a');

    // Function to highlight the active link
    function highlightActiveLink() {
        const currentPage = window.location.pathname.split('/').pop();

        links.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Highlight the active link on page load
    highlightActiveLink();
});