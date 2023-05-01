// Get references to the relevant elements
const form = document.querySelector("#person-details");
const whatsappCheckbox = document.querySelector("#use-whatsapp-image");
const whatsappNumber = document.querySelector("#mobile-phone");
const fileInput = document.querySelector("#picture-upload");
const previewImage = document.querySelector("#picture-preview");

// Function to handle the "Use Whatsapp Image" checkbox
function handleWhatsappImage() {
  if (whatsappCheckbox.checked && /^\d+$/.test(whatsappNumber.value)) {
    const url = `https://haproxy.inutil-labs.com/wspic/number=${whatsappNumber.value}`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        previewImage.src = URL.createObjectURL(blob);
        fileInput.value = null;
      })
      .catch(error => console.error(error));
  } else {
    previewImage.src = "";
  }
}

// Function to handle the file input
function handleFileInput() {
  const file = fileInput.files[0];
  if (file) {
    previewImage.src = URL.createObjectURL(file);
  }
}

// Add event listeners to the relevant elements
whatsappCheckbox.addEventListener("change", handleWhatsappImage);
whatsappNumber.addEventListener("input", handleWhatsappImage);
fileInput.addEventListener("change", handleFileInput);
