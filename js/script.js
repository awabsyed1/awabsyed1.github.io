// Highlight the nav link matching the current page
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.main-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});

function initializeTabs() {
    const tabs = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(item => item.classList.remove('active'));

            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to the clicked tab
            tab.classList.add('active');

            // Show the corresponding tab pane
            const activePane = document.getElementById(tab.dataset.tab);
            activePane.classList.add('active');
        });
    });
}

// Initialize tabs when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeTabs);