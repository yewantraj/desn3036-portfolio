const sideNav = document.querySelector(".side-nav");
const aboutSection = document.querySelector("#about");

// Function to handle scroll events
window.addEventListener("scroll", () => {
    // Check if we've scrolled past the #about section
    if (window.scrollY >= aboutSection.offsetTop) {
        // Add a class when scrolling down past #about
        sideNav.classList.add("scrolled-past-about");
    } else {
        // Remove the class when scrolling up from #about
        sideNav.classList.remove("scrolled-past-about");
    }
});

window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section"); // Select all sections
    let navLinks = document.querySelectorAll(".side-nav a"); // Select all navigation links

    sections.forEach(function (section) {
        // Get the position of the section relative to the viewport
        let sectionTop = section.offsetTop - 50; // Adjust offset for better accuracy
        let sectionBottom = sectionTop + section.offsetHeight;

        // Check if the section is in the viewport
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            navLinks.forEach(function (link) {
                // Remove the active class from all links
                link.classList.remove("active");

                // Add the active class to the current link based on the section
                if (link.getAttribute("href").slice(1) === section.id) {
                    link.classList.add("active");
                }
            });
        }
    });
});

AOS.init();
