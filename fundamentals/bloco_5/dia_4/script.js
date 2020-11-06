let applyButton = document.getElementById("btn-apply-styles");
let resetButton = document.getElementById("btn-reset-styles");
let body = document.body;

body.style.fontFamily = localStorage.fontFamily;
body.style.fontSize = localStorage.fontSize;
body.style.backgroundColor = localStorage.backgroundColor;
body.style.color = localStorage.textColor;
body.style.lineHeight = localStorage.lineHeight;

applyButton.addEventListener("click", function () {
  let fontFamily = document.getElementById("font-family").value;
  let fontSize = document.getElementById("font-size").value;
  let backgroundColor = document.getElementById("background-color-selector")
    .value;
  let textColor = document.getElementById("color-selector").value;
  let lineHeight = document.getElementById("line-height").value;

  body.style.fontFamily = fontFamily;
  body.style.fontSize = fontSize + "px";
  body.style.backgroundColor = backgroundColor;
  body.style.color = textColor;
  body.style.lineHeight = lineHeight;

  localStorage.fontFamily = fontFamily.toString();
  localStorage.fontSize = fontSize + "px";
  localStorage.backgroundColor = backgroundColor;
  localStorage.textColor = textColor;
  localStorage.lineHeight = lineHeight;
});

resetButton.addEventListener("click", function () {
  body.style.fontFamily = 'Arial';
  body.style.fontSize = "16px";
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  body.style.lineHeight = 1.0;

  localStorage.fontFamily = 'Arial';
  localStorage.fontSize = "16px";
  localStorage.backgroundColor = 'white';
  localStorage.color = 'black';
  localStorage.lineHeight = 1.0;
})