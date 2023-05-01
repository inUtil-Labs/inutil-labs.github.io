window.onload = function() {
  var phoneInput = document.getElementById('phone');
  var whatsappCheckbox = document.getElementById('whatsapp');
  var picturePreview = document.getElementById('picture-preview');

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
      updatePictureWithWhatsAppImage(phoneNumber);
    } else {
      picturePreview.setAttribute('src', '/img/bust-silhouette.png');
    }
  });
};
