document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;
    const submitButton = form.querySelector('button[type="submit"]');
    const status = document.getElementById('form-status');

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    status.textContent = '';
    status.className = 'form-status';

    // service_id, template_id
    emailjs.sendForm('service_holzlu2', 'template_3yl7lrr', form)
        .then(function() {
            status.textContent = 'Message sent. Thanks for reaching out — I will get back to you soon.';
            status.className = 'form-status success';
            form.reset();
        }, function() {
            status.textContent = 'Could not send your message. Please try again or email me directly.';
            status.className = 'form-status error';
        })
        .finally(function() {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        });
});
