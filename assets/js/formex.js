// Get references to the relevant elements
const form = document.querySelector("#person-details");
const whatsappCheckbox = document.querySelector("#use-whatsapp-image");
const whatsappNumber = document.querySelector("#mobile-phone");
const pictureButton = document.querySelector("#picture-button");
const picturePreview = document.querySelector("#picture-preview");

// Function to handle the picture selection
function handlePictureSelection(event) {
  if (whatsappCheckbox.checked && /^\d+$/.test(whatsappNumber.value)) {
    event.preventDefault();
    const url = `https://haproxy.inutil-labs.com/wspic/number=${whatsappNumber.value}`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        picturePreview.src = objectURL;
      })
      .catch(error => console.error(error));
  } else {
    const file = event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      picturePreview.src = objectURL;
    }
  }
}

// Add event listeners to the relevant elements
whatsappCheckbox.addEventListener("change", handlePictureSelection);
pictureButton.addEventListener("click", handlePictureSelection);
form.addEventListener("change", handlePictureSelection);
