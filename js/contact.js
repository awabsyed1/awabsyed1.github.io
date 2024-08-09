document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Use the form data to send email via EmailJS
    //  service_id , template ID
    emailjs.sendForm('service_holzlu2', 'template_3yl7lrr', this) 
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});