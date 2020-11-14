const form = document.getElementsByTagName
const states = document.getElementById("state");
// const regex = /\d{2}\/\d{2}\/\d{4}/;
const date = document.getElementById("start-date");
const submitButton = document.getElementById("submit");

function selectState() {
  const stateUF = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  for (let stateName = 0; stateName < stateUF.length; stateName += 1) {
    const option = document.createElement("option");
    option.innerHTML = stateUF[stateName];
    option.value = stateUF[stateName];
    states.appendChild(option);
  }
}
selectState();

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const required = document.querySelectorAll("[required]");
  let errors = '';
  for (let itemRequired = 0; itemRequired < required.length; itemRequired += 1) {
    let input = required[itemRequired];
    if (input.required) {
      if (input.value === "") {
        errors += `O campo ${input.name} é obrigatório! \n`;
      }
    }
  }

  // Validação da data
  // const checkData = regex.test(date.value);
  const dataArray = date.value.split('/');
  const day = parseInt(dataArray[0]);
  const month = parseInt(dataArray[1]);
  const year = parseInt(dataArray[2]);
  console.log(dataArray, day,month,year);
  if (!(day > 0 || day <= 31 || month > 0 || month <= 12 || year > 0)) {
    errors += 'Insira uma data com o formato dd/mm/aaaa.';
  }
  alert(errors);
});


