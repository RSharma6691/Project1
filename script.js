// Smooth Scroll to Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero Section Animation (fade-in)
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');
});

// Menu Item Hover Animation
const menuItems = document.querySelectorAll('.menu-category li');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hover');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hover');
    });
});

// Form Validation (Optional Basic)
document.querySelector('form').addEventListener('submit', (event) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;

    if (!name || !email || !address) {
        event.preventDefault();
        alert('Please fill in all fields before submitting!');
    }
});
