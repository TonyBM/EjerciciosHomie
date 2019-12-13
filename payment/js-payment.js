
let visaButton = document.getElementById("visa-image");
let masterCardButton = document.getElementById("mastercard-image");
let amexButton = document.getElementById("amex-image");

let tarjetas = document.getElementsByClassName("card-image");

for (let tarjeta of tarjetas) {
  tarjeta.addEventListener("click", cardSelected);
}


function cardSelected() {
  paintBorders(this);
  masterCardMessage(this);
  showPayButton();
}
function paintBorders(targetElement) {
  for (let tarjeta of tarjetas) {
    tarjeta.style.borderColor = "rgb(204, 204, 204)";
  }
  targetElement.style.borderColor = "rgb(141, 122, 255)";

}
function showPayButton() {
  let button = document.getElementById(`button-container`);
  button.style.visibility = "visible";
  button.style.display = "block";
}
function masterCardMessage(targetElement) {
  let masterCardMessageBox = document.getElementById(`master-card-message`);
  if (targetElement.id == "mastercard-image") {
    masterCardMessageBox.style.visibility = "visible";
    masterCardMessageBox.style.display = "block";
  }
  else {
    masterCardMessageBox.style.visibility = "hidden";
    masterCardMessageBox.style.display = "none";
  }
}