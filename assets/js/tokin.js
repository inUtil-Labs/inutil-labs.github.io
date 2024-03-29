const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")
const submitButton = document.getElementById('validate')
const form = document.getElementById('stepByStepForm')
const dots = document.getElementsByClassName('progress-bar__dot')
const numberOfSteps = 3
let currentStep = 1
console.log("JS file loaded");
for(let i = 0 ; i < dots.length ; ++i){
  dots[i].addEventListener('click', ()=>{
    goToStep(i+1) 
  })
}

previousButton.onclick = goPrevious
nextButton.onclick = goNext


function goNext(e) {
  e.preventDefault()

  // check if input value exists before moving to next step
  const currentInput = document.getElementsByClassName(`step${currentStep}`)[0].getElementsByTagName("input")[0];
  if (currentInput.value === "") {
    return;
  }

  currentStep += 1

  goToStep(currentStep)
}

function goPrevious(e) {
  e.preventDefault()
  currentStep -= 1
  goToStep(currentStep)
}

function goToStep(stepNumber){   
  currentStep = stepNumber
  
  let inputsToHide = document.getElementsByClassName('step')
  let inputs = document.getElementsByClassName(`step${currentStep}`)
  let indicators = document.getElementsByClassName('progress-bar__dot')
  
  for(let i = indicators.length-1; i >= currentStep ; --i){
    indicators[i].classList.remove('full')
  }
  
  for(let i = 0; i < currentStep; ++i){
    indicators[i].classList.add('full')
  }
  
  //hide all input
  for (let i = 0; i < inputsToHide.length; ++i) {
    hide(inputsToHide[i])
  }
  
  //only show the right one
  for (let i = 0; i < inputs.length; ++i) {
    show(inputs[i])
  }
  
  //if we reached final step
  if(currentStep === numberOfSteps){
    hide(previousButton)
    hide(nextButton)
    show(submitButton)
  }
  
  //else if first step
  else if(currentStep === 1){
    disable(previousButton)
    enable(nextButton)
    hide(submitButton)
  }
  
  else {
    enable(previousButton)
    enable(nextButton)
    hide(submitButton)
  }
}

function enable(elem) {
  elem.classList.remove("disabled");
  elem.disabled = false;
}

function disable(elem) {
  elem.classList.add("disabled");
  elem.disabled = true;
}

function show(elem){
  elem.classList.remove('hidden')
}

function hide(elem){
  elem.classList.add('hidden')
}


  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const phone = document.querySelector('#numero-a-consultar').value;
    const token = document.querySelector('#tokin').value;
    const url = `https://whatsapp-scraper.p.rapidapi.com/free/wspicture?phone=${phone}&token=${token}`;
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '0b2157bfc4mshe1bc5572ac284d7p17fde2jsnadff8abf693a',
        'X-RapidAPI-Host': 'whatsapp-scraper.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      document.getElementById('profile-pic').src = result;
    } catch (error) {
      console.error(error);
    }
  });
