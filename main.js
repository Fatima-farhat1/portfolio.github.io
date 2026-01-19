/* --- YOUR EXISTING TYPED.JS CODE --- */
var typed = new Typed(".text", {
    strings: ["Frontend Developer ", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* --- ADD THIS NEW PART --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Toggles the dropdown
    navbar.classList.toggle('active');
};

// PROFESSIONAL FIX: Closes the menu automatically when you click a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
    };
});

/* Your Typed.js code continues here... */

