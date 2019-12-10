
let visaButton = document.getElementById("visa-image");
let masterCardButton = document.getElementById("mastercard-image");
let amexButton = document.getElementById("amex-image");

visaButton.addEventListener("click", () => {cardSelected("visa")});
masterCardButton.addEventListener("click", () => {cardSelected("mastercard")});
amexButton.addEventListener("click", () => {cardSelected("amex") });


function cardSelected(name){
  let visaImage = document.getElementById(`visa-image`);
  let mastercardImage = document.getElementById(`mastercard-image`);
  let amexImage = document.getElementById(`amex-image`);
  let comissionText = document.getElementById(`comission-text`);
  let masterCardMessage = document.getElementById(`master-card-message`);
  let button = document.getElementById(`button-container`);
  button.style.visibility = "visible";
  button.style.display = "block";

  switch(name) 
  {
    case "visa":
        visaImage.style.borderColor= "rgb(141, 122, 255)";
        mastercardImage.style.borderColor= "rgb(204, 204, 204)";
        amexImage.style.borderColor= "rgb(204, 204, 204)";
        comissionText.innerHTML = "* Se cobrará el 2.65% por comisión"
        masterCardMessage.style.visibility = "hidden";
        masterCardMessage.style.display = "none";
      break;
    case "mastercard":
        mastercardImage.style.borderColor= "rgb(141, 122, 255)";
        visaImage.style.borderColor= "rgb(204, 204, 204)";
        amexImage.style.borderColor= "rgb(204, 204, 204)";
        comissionText.innerHTML = "* Se cobrará el 2.65% por comisión"

        masterCardMessage.style.visibility = "visible";
        masterCardMessage.style.display = "block";

      break;
    case "amex":
        amexImage.style.borderColor= "rgb(141, 122, 255)";
        visaImage.style.borderColor= "rgb(204, 204, 204)";
        mastercardImage.style.borderColor= "rgb(204, 204, 204)";
        masterCardMessage.style.visibility = "hidden";
        masterCardMessage.style.display = "none";

        comissionText.innerHTML = "* Se cobrará el 3.65% por comisión"
      break;

  }
  
}