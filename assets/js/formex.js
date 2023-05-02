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
      // Call API to get Whatsapp image
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
          picturePreview.style.width = "240px";
          picturePreview.style.height = "240px";
        })
        .catch(error => {
          alert("Error fetching image: " + error);
        });

    } else {
      alert("Invalid phone number format. Please enter numbers only.");
    }
  } else {
    // Trigger file input click event to browse for image file
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

  const useWhatsappImage = document.getElementById("use-whatsapp-image").checked;

  if (useWhatsappImage) {
    // Make HTTP request to submit form data along with image URL
    const mobileInput = document.getElementById("mobile");
    const imageUrl = document.getElementById("profile-picture-preview").src;
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("mobile", mobileInput.value);
    formData.append("profile-picture-url", imageUrl);

    fetch("/submit-form-with-image-url", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
    })
    .catch(error => {
      alert("Error submitting form: " + error);
    });
  } else {
    // Make HTTP request to submit form data along with image file
    const formData = new FormData(form);

    fetch("/submit-form", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
    })
    .catch(error => {
      alert("
