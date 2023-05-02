/*
function handleUploadButtonClick() {
  const useWhatsappImage = document.getElementById("use-whatsapp-image").checked;
  const mobileInput = document.getElementById("mobile");
  const profilePictureInput = document.getElementById("profile-picture");

  if (!profilePictureInput.value && !useWhatsappImage) {
    profilePictureInput.click();
  } else if (useWhatsappImage) {
    const mobileRegex = /^[0-9]+$/;

    if (mobileRegex.test(mobileInput.value)) {
      const apiUrl = "https://whatsapp-scraper.p.rapidapi.com/wspicture";
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7540839c98mshc8fe15e657db2c2p13c8ccjsnd1d2ebde022a',
          'X-RapidAPI-Host': 'whatsapp-scraper.p.rapidapi.com'
        }
      };
      const phoneNumber = mobileInput.value;
      const requestUrl = `${apiUrl}?phone=${phoneNumber}`;

      fetch(requestUrl, options)
        .then(response => response.text())
        .then(data => {
          const imageUrl = data.trim();
          const picturePreview = document.getElementById("profile-picture-preview");
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
    const form = document.getElementById("person-details-form");
    form.submit();
  }
}
*/

function handleUploadButtonClick() {
  const useWhatsappImage = document.getElementById("use-whatsapp-image").checked;
  const mobileInput = document.getElementById("mobile");
  const profilePictureInput = document.getElementById("profile-picture");

  if (useWhatsappImage) {
    const mobileRegex = /^[0-9]+$/;

    if (mobileRegex.test(mobileInput.value)) {
      const apiUrl = "https://whatsapp-scraper.p.rapidapi.com/wspicture";
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7540839c98mshc8fe15e657db2c2p13c8ccjsnd1d2ebde022a',
          'X-RapidAPI-Host': 'whatsapp-scraper.p.rapidapi.com'
        }
      };
      const phoneNumber = mobileInput.value;
      const requestUrl = `${apiUrl}?phone=${phoneNumber}`;

      fetch(requestUrl, options)
        .then(response => response.text())
        .then(data => {
          const imageUrl = data.trim();
          const picturePreview = document.getElementById("profile-picture-preview");
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
    const picturePreview = document.getElementById("profile-picture-preview");

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

const useWhatsappImageCheckbox = document.getElementById("use-whatsapp-image");
useWhatsappImageCheckbox.addEventListener("change", event => {
  const picturePreview = document.getElementById("profile-picture-preview");
  const fileInput = document.getElementById("profile-picture");

  if (useWhatsappImageCheckbox.checked) {
    picturePreview.style.display = "none";
    fileInput.style.display = "none";
  } else {
    picturePreview.style.display = "block";
    fileInput.style.display = "block";
  }
});

const profilePictureUploadButton = document.getElementById("profile-picture-upload");
profilePictureUploadButton.addEventListener("click", event => {
  const useWhatsappImage = document.getElementById("use-whatsapp-image").checked;

  if (!useWhatsappImage) {
    const profilePictureInput = document.getElementById("profile-picture");
    profilePictureInput.click();
  }
});

