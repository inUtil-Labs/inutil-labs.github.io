document.getElementById('contactForm2').addEventListener('submit', handleContactFormSubmit);

function setTurnstileToken(token) {
    const tokenFieldContact = document.querySelector('#contactForm2 input[name="cf-turnstile-response"]');    
    if (tokenFieldContact) {
        tokenFieldContact.value = token;
        //console.log('Turnstile token set for Contact form:', token); // Debug: log the token
    }
}

async function handleContactFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const turnstileResponse = form.querySelector('input[name="cf-turnstile-response"]').value;

    if (!turnstileResponse) {
        alert('Please reload the page to complete the Capthca challenge.');
        return;
    }

    // Gather form data manually
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    const source = form.querySelector('input[name="source"]').value;

    // Create a JSON object
    const formDataObj = {
        name,
        email,
        message,
        source,
        'cf-turnstile-response': turnstileResponse // Include the Turnstile token
    };

    const sendButton = document.getElementById('sendButton');
    sendButton.disabled = true;
    sendButton.textContent = 'Submitting...';
    try {
        const response = await fetch('https://api.profile-picture.app/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        });

        if (response.ok) {
            sendButton.textContent = 'Already Submitted';
            //alert('Sent');
            // Optionally, reset the form fields here
        } else {
            alert('error');
            sendButton.disabled = false;
            sendButton.textContent = 'Send Message';
            alert('There was an error submitting your message. Please reload and try again.');
        }
    } catch (error) {
        //alert('kaka');
        console.error('Error:', error);
        sendButton.disabled = false;
        sendButton.textContent = 'Send Message';
        alert('There was an error submitting your message. Please reload and try again.');
    }
}
