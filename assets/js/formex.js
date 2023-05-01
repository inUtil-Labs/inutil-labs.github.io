function handleUploadButtonClick() {
  const useWhatsappImage = document.getElementById("use-whatsapp-image").checked;
  const mobileInput = document.getElementById("mobile");
  const profilePictureInput = document.getElementById("profile-picture");

  if (useWhatsappImage) {
    const mobileRegex = /^[0-9]+$/;

    if (mobileRegex.test(mobileInput.value)) {
      const apiUrl = "https://whatsapp-scraper.p.rapidapi.com/wspicture";
      const headers = {
        'X-RapidAPI-Key': '41cc7ae519mshec0ca58538fbba6p1185d1jsn5da840d814c0',
        //'X-RapidAPI-Host': 'whatsapp-scraper.p.rapidapi.com'
      };
      const phoneNumber = mobileInput.value;
      const requestUrl = `${apiUrl}?phone=${phoneNumber}`;

      fetch(requestUrl, { headers })
        .then(response => response.text())
        .then(data => {
          const imageUrl = data.trim();
          const picturePreview = document.getElementById("picture-preview");
          picturePreview.src = imageUrl;
          picturePreview.style.display = "block";
          picturePreview.style.width = "50px";
          picturePreview.style.height = "50px";
        })
        .catch(error => {
          alert("Error fetching image: " + error);
        });
    } else {
      alert("Invalid phone number format. Please enter numbers only.");
    }
  } else {
    profilePictureInput.click();
  }
}


function handleFileInputChange() {
  const fileInput = document.getElementById("profile-picture");
  const file = fileInput.files[0];

  if (file) {
    const picturePreview = document.getElementById("picture-preview");

    const reader = new FileReader();
    reader.onload = function(event) {
      const imageUrl = event.target.result;
      picturePreview.src = imageUrl;
      picturePreview.style.display = "block";
      picturePreview.style.width = "50px";
      picturePreview.style.height = "50px";
    };
    reader.readAsDataURL(file);
  }
}

const form = document.getElementById("person-details-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  handleUploadButtonClick();
});
