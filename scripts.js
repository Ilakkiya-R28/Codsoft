document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for clicking! We will contact you soon.');
});