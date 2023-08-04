const header = document.querySelector('.navbar');

function updateNavbarBackground() {
    if (window.scrollY > 0) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}

// Apply the initial class when the page loads
updateNavbarBackground();

// Listen for scroll events and update the class accordingly
window.addEventListener('scroll', updateNavbarBackground);


function scrollToPortfolio() {
    // Get the element with id "portfolio"
    const portfolioSection = document.getElementById('portfolio');

    // Use the `scrollIntoView` method to scroll to the portfolio section smoothly
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    // Get the element with id "contact"
    const contactSection = document.getElementById('contact');

    // Use the `scrollIntoView` method to scroll to the contact section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
}









