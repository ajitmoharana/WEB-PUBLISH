// Smooth scroll for anchor links starting with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch(this.action, {
            method: this.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                // ✅ Redirect to thankyou.html after successful submission
                window.location.href = "thank-you.html";
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        })
        .catch(() => {
            alert("Unable to submit form. Please check your connection.");
        });
    });
}
