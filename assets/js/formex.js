window.onload = function() {
  var phoneInput = document.getElementById('phone');
  var whatsappCheckbox = document.getElementById('whatsapp');
  var picturePreview = document.getElementById('picture-preview');
  var uploadButton = document.getElementById('upload-button');

  // Check if the phone number is valid
  function isPhoneNumberValid(phoneNumber) {
    var regex = /^\d+$/;
    return regex.test(phoneNumber);
  }

  // Update the picture preview with the WhatsApp image
  function updatePictureWithWhatsAppImage(phoneNumber) {
    var url = 'https://haproxy.inutil-labs.com/wspic/number=' + phoneNumber;
    picturePreview.setAttribute('src', url);
  }

  // Listen for changes in the phone number input
  phoneInput.addEventListener('input', function() {
    var phoneNumber = this.value;

    // Show the WhatsApp checkbox if the phone number is valid
    if (isPhoneNumberValid(phoneNumber)) {
      whatsappCheckbox.parentNode.style.display = 'block';
    } else {
      whatsappCheckbox.parentNode.style.display = 'none';
    }
  });

  // Listen for changes in the WhatsApp checkbox
  whatsappCheckbox.addEventListener('change', function() {
    if (this.checked) {
      var phoneNumber = phoneInput.value;

      // Check if the phone number is valid before updating the picture preview
      if (isPhoneNumberValid(phoneNumber)) {
        updatePictureWithWhatsAppImage(phoneNumber);
        uploadButton.disabled = true;
      } else {
        alert('Please enter a valid phone number.');
        this.checked = false;
      }
    } else {
      picturePreview.setAttribute('src', '/img/bust-silhouette.png');
      uploadButton.disabled = false;
    }
  });

  // Listen for changes in the upload button
  uploadButton.addEventListener('change', function() {
    var file = this.files[0];

    if (file && !whatsappCheckbox.checked) {
      // Display the uploaded picture in the preview
      var reader = new FileReader();
      reader.onload = function(event) {
        picturePreview.setAttribute('src', event.target.result);
      };
      reader.readAsDataURL(file);

      // Enable the WhatsApp checkbox
      whatsappCheckbox.disabled = false;
    } else if (whatsappCheckbox.checked) {
      // Check if the phone number is valid before updating the picture preview
      var phoneNumber = phoneInput.value;
      if (isPhoneNumberValid(phoneNumber)) {
        updatePictureWithWhatsAppImage(phoneNumber);
        uploadButton.disabled = true;
      } else {
        alert('Please enter a valid phone number.');
        this.value = null;
      }
    } else {
      // Reset the preview to the default bust silhouette
      picturePreview.setAttribute('src', '/img/bust-silhouette.png');
    }
  });
};
