document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmit);

function setTurnstileToken(token) {
    const tokenFieldApi = document.getElementById('cf-turnstile-response');
    const tokenFieldContact = document.querySelector('#contactForm input[name="cf-turnstile-response"]');
    
    if (tokenFieldApi) {
        tokenFieldApi.value = token;
        console.log('Turnstile token set for API form:', token); // Debug: log the token
    }
    
    if (tokenFieldContact) {
        tokenFieldContact.value = token;
        console.log('Turnstile token set for Contact form:', token); // Debug: log the token
    }
}


async function handleContactFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const turnstileResponse = form.querySelector('input[name="cf-turnstile-response"]').value;

    if (!turnstileResponse) {
        alert('Please complete the Turnstile challenge.');
        return;
    }

    // Gather form data manually
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // Create a JSON object
    const formDataObj = {
        name,
        email,
        message,
        'cf-turnstile-response': turnstileResponse // Include the Turnstile token
    };

    const sendButton = document.getElementById('sendButton');
    sendButton.disabled = true;
    sendButton.textContent = 'Submitting...';

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set content-type to application/json
                'Accept': 'application/json' // Ensure the server responds with JSON
            },
            body: JSON.stringify(formDataObj) // Stringify the JSON object
        });

        if (response.ok) {
            sendButton.textContent = 'Submitted';
        } else {
            sendButton.disabled = false;
            sendButton.textContent = 'Send Message';
            alert('There was an error submitting your message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        sendButton.disabled = false;
        sendButton.textContent = 'Send Message';
        alert('There was an error submitting your message. Please try again.');
    }
}
