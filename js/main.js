document.addEventListener('DOMContentLoaded', () => {
    console.log('TAHIRA Web Experience Loaded');

    // Simple scroll effect for Navbar
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});
