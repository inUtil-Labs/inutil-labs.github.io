function handleFileInputChange() {
  const fileInput = document.querySelector('#profile-picture');
  const previewImage = document.querySelector('#profile-picture-preview');
  const uploadButton = document.querySelector('#profile-picture-upload-btn');
  const useWhatsappImageCheckbox = document.querySelector('#use-whatsapp-image');

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();

      img.onload = function () {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 100;
        const MAX_HEIGHT = 100;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        previewImage.src = canvas.toDataURL('image/png');
      }

      img.src = e.target.result;

      previewImage.style.display = 'block';
      uploadButton.disabled = false;
      useWhatsappImageCheckbox.checked = false;
    }

    reader.readAsDataURL(fileInput.files[0]);
  }
}

function handleUploadButtonClick() {
  const useWhatsappImageCheckbox = document.querySelector('#use-whatsapp-image');

  if (useWhatsappImageCheckbox.checked) {
    const mobileInput = document.querySelector('#mobile');
    const mobileNumber = mobileInput.value;

    if (/^\d+$/.test(mobileNumber)) {
      const url = `https://haproxy.inutil.info/getpic?phone=${mobileNumber}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const previewImage = document.querySelector('#profile-picture-preview');
          const uploadButton = document.querySelector('#profile-picture-upload-btn');

          previewImage.src = data.url;
          previewImage.style.display = 'block';
          previewImage.style.width = '100px';
          previewImage.style.height = '100px';
          uploadButton.disabled = true;
        })
        .catch(error => {
          alert('An error occurred while retrieving the image. Please try again later.');
          console.error(error);
        });
    } else {
      alert('Please enter a valid mobile number.');
    }
  }
}
