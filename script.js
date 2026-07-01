document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Basic Form Interaction
    const travelForm = document.getElementById("travelForm");
    
    if (travelForm) {
        travelForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            alert("Your journey has been initiated. Our concierges will contact you shortly.");
            travelForm.reset();
        });
    }
});