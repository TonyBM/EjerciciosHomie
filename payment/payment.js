
	var visaButton = document.getElementById("visa-image");
	var masterCardButton = document.getElementById("mastercard-image");
	var amexButton = document.getElementById("amex-image");

	visaButton.addEventListener("click", () => {changeBorder("visa")});
	masterCardButton.addEventListener("click", () => {changeBorder("mastercard")});
  amexButton.addEventListener("click", () => {changeBorder("amex") });


function changeBorder(name){
  var otherImages
  var visaImage = document.getElementById(`visa-image`);
  var mastercardImage = document.getElementById(`mastercard-image`);
  var amexImage = document.getElementById(`amex-image`);
  var comissionText = document.getElementById(`comission-text`);

  switch(name) 
  {
    case "visa":
        visaImage.style.borderColor= "rgb(141, 122, 255)";
        mastercardImage.style.borderColor= "rgb(204, 204, 204)";
        amexImage.style.borderColor= "rgb(204, 204, 204)";
        comissionText.innerHTML = "* Se cobrará el 2.65% por comisión"
      break;
    case "mastercard":
        mastercardImage.style.borderColor= "rgb(141, 122, 255)";
        visaImage.style.borderColor= "rgb(204, 204, 204)";
        amexImage.style.borderColor= "rgb(204, 204, 204)";
        comissionText.innerHTML = "* Se cobrará el 2.65% por comisión"
      break;
    case "amex":
        amexImage.style.borderColor= "rgb(141, 122, 255)";
        visaImage.style.borderColor= "rgb(204, 204, 204)";
        mastercardImage.style.borderColor= "rgb(204, 204, 204)";

        comissionText.innerHTML = "* Se cobrará el 3.65% por comisión"
      break;

  }
  
}