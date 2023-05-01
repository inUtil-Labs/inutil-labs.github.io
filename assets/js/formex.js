function handleUploadButtonClick() {
  const useWhatsappImageCheckbox = document.querySelector('#use-whatsapp-image');
  const mobileInput = document.querySelector('#mobile');
  const uploadBtn = document.querySelector('#profile-picture-upload-btn');
  const profilePicturePreview = document.querySelector('#profile-picture-preview');
  
  if (useWhatsappImageCheckbox.checked) {
    const phoneNumber = mobileInput.value.replace(/\D/g, ''); // remove non-digits from phone number
    
    if (phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    
    fetch(`https://haproxy.inutil.info/getpic?phone=${phoneNumber}`)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.url;
        profilePicturePreview.setAttribute('src', imageUrl);
      })
      .catch(error => console.error(error));
  } else {
    uploadBtn.disabled = false;
    uploadBtn.click();
    uploadBtn.disabled = true;
    const uploadedImage = uploadBtn.previousSibling.previousSibling.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePicturePreview.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(uploadedImage);
  }
}

