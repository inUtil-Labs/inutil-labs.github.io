// Get references to the relevant elements
const form = document.querySelector("#person-details");
const whatsappCheckbox = document.querySelector("#use-whatsapp-image");
const whatsappNumber = document.querySelector("#mobile-phone");
const pictureButton = document.querySelector("#picture-button");
const picturePreview = document.querySelector("#picture-preview");

// Function to handle the picture selection
function handlePictureSelection() {
  alert("Picture button clicked");
  if (whatsappCheckbox.checked && /^\d+$/.test(whatsappNumber.value)) {
    alert("WhatsApp checkbox is checked and phone number is valid");
    const url = `https://haproxy.inutil-labs.com/wspic/number=${whatsappNumber.value}`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        picturePreview.src = objectURL;
      })
      .catch(error => console.error(error));
  } else {
    alert("WhatsApp checkbox is not checked or phone number is invalid");
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      const objectURL = URL.createObjectURL(file);
      picturePreview.src = objectURL;
    });
    fileInput.click();
  }
}

// Add event listener to the picture button
pictureButton.addEventListener("click", handlePictureSelection);
