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

// Sample projects data
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1",
        link: "#"
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Description of Project 3",
        link: "#"
    }
];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        projectList.appendChild(projectItem);
    });
}