// Elementos HTML
// Elemento main
let main = document.querySelector('.main-text');
// Container dos botões
let settingsContainer = document.querySelector(".config");
// Botões
let applyButton = document.getElementById("btn-apply-styles");
let resetButton = document.getElementById("btn-reset-styles");
// Opções
let fontFamily = document.getElementById("font-family");
let fontSize = document.getElementById("font-size");
let backgroundColor = document.getElementById("background-color-selector");
let color = document.getElementById("color-selector");
let lineHeight = document.getElementById("line-height");

// Carrega a última configuração usada
let lastAppliedJSON = localStorage.getItem("applied");
let lastAppliedObj = JSON.parse(lastAppliedJSON);
for (let key in lastAppliedObj) {
  main.style[key] = lastAppliedObj[key];
}

// Eventos que aplicam os estilos
applyButton.addEventListener("click", applyStyles);
settingsContainer.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    applyStyles();
  }
});

// Função para aplicar os estilos
function applyStyles() {
  // Configurações aplicadas
  let appliedSettings = {
    fontFamily: fontFamily.value,
    fontSize: fontSize.value + "px",
    backgroundColor: backgroundColor.value,
    color: color.value,
    lineHeight: lineHeight.value,
  };
  // Armazenamento das config aplicadas
  let applySettingsJSON = JSON.stringify(appliedSettings);
  localStorage.setItem("applied", applySettingsJSON);
  // Aplica os estilos
  for (let key in appliedSettings) {
    main.style[key] = appliedSettings[key];
  }
}

// Configurações padrão
let stdSettings = {
  fontFamily: "",
  fontSize: "",
  backgroundColor: "",
  color: "",
  lineHeight: "",
};
// Armazenamento das config padrão
let stdSettingsJSON = JSON.stringify(stdSettings);
localStorage.setItem("standard", stdSettingsJSON);
// Retorna os estilos para o padrão
resetButton.addEventListener("click", function () {
  let stdSettingsObj = JSON.parse(localStorage["standard"]);
  for (let key in stdSettingsObj) {
    main.style[key] = stdSettingsObj[key];
  }
  localStorage.setItem("applied", stdSettingsJSON);
});
