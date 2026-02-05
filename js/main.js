console.log("Navbar JS Loaded");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded - Initializing Navbar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking a link (optional but good for UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
});
