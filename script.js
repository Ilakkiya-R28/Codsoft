function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Handle form submission
function submitForm(event) {
    event.preventDefault();
    document.getElementById('confirmation').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('confirmation').classList.add('hidden');
    }, 3000);
}