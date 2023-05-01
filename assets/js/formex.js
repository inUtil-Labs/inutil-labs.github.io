window.addEventListener('load', function() {
  alert("hello");
  
  const form = document.getElementById('person-details-form');
  const fileInput = document.getElementById('profile-picture');
  const previewContainer = document.getElementById('profile-picture-preview');
  const previewImage = previewContainer.querySelector(".profile-picture-preview__image");
  const uploadButton = document.getElementById('profile-picture-upload-btn');
  const whatsappCheckbox = document.getElementById('use-whatsapp-image');
  const mobileInput = document.getElementById('mobile');
  const uploadImageButton = document.getElementById('upload-image-btn');
  
  function validateMobile(mobile) {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  }
  
  function toggleUploadButton(disabled) {
    uploadButton.disabled = disabled;
    uploadButton.style.backgroundColor = disabled ? "#D3D3D3" : "#007bff";
    uploadButton.style.cursor = disabled ? "not-allowed" : "pointer";
  }
  
  function showErrorMsg(element, message) {
    element.innerText = message;
    element.style.display = 'block';
  }
  
  function hideErrorMsg(element) {
    element.innerText = '';
    element.style.display = 'none';
  }
  
  function readImage(file) {
    if (file.type && !file.type.startsWith('image/')) {
      return;
    }
    
    const reader = new FileReader();
    
    reader.addEventListener('load', function() {
      previewImage.setAttribute('src', this.result);
    });
    
    reader.readAsDataURL(file);
  }
  
  function uploadProfilePicture(file) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);
    xhr.open('POST', 'https://haproxy.inutil-labs.com/wspic/number=' + mobileInput.value);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          previewImage.setAttribute('src', response.image);
        } else {
          alert(response.error);
        }
      } else {
        alert('Failed to upload image.');
      }
    };
    xhr.send(formData);
  }
  
  function handleFileInputChange() {
    const file = fileInput.files[0];
    if (file) {
      readImage(file);
      toggleUploadButton(false);
    } else {
      previewImage.setAttribute('src', '');
      toggleUploadButton(true);
    }
  }
  
  function handleUploadButtonClick() {
    if (whatsappCheckbox && whatsappCheckbox.checked && validateMobile(mobileInput.value)) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://haproxy.inutil-labs.com/wspic/number=' + mobileInput.value);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            previewImage.setAttribute('src', response.image);
          } else {
            alert(response.error);
          }
        } else {
          alert('Failed to fetch image.');
        }
      };
      xhr.send();
    } else {
      const file = fileInput.files[0];
      if (file) {
        uploadProfilePicture(file);
      }
    }
  }
  
  function handleMobileInputChange(event) {
  const inputField = event.target;
  const inputValue = inputField.value.trim();
  const isValidMobile = /^\d{10}$/.test(inputValue);

  console.log("Input value: ", inputValue);

  if (isValidMobile) {
    whatsappCheckbox.disabled = false;
    alert("Valid mobile number!");
  } else {
    whatsappCheckbox.disabled = true;
  }
}
