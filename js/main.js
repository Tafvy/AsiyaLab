document.addEventListener('DOMContentLoaded', () => {
    console.log('ASIYA Medical Luxury Loaded');

    // Waitlist Form UI Toggles
    const openWaitlistBtn = document.getElementById('openWaitlist');
    const closeWaitlistBtn = document.getElementById('closeWaitlist');
    const waitlistForm = document.getElementById('waitlistForm');

    if (openWaitlistBtn && waitlistForm) {
        openWaitlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            waitlistForm.classList.remove('hidden');
        });
    }

    if (closeWaitlistBtn && waitlistForm) {
        closeWaitlistBtn.addEventListener('click', () => {
            waitlistForm.classList.add('hidden');
        });
    }

    // Close modal by clicking the dark backdrop
    if (waitlistForm && waitlistForm.classList.contains('waitlist-modal')) {
        waitlistForm.addEventListener('click', (e) => {
            if (e.target === waitlistForm) {
                waitlistForm.classList.add('hidden');
            }
        });
    }
});
