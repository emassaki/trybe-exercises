// Estrutura retirada de https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5 por flpnascto no GitHub
let state = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
  ];

  for (let stateName = 0; stateName < state.length; stateName += 1) {
    const states = document.getElementById('state');
    const option = document.createElement('option');
    option.innerHTML = state[stateName];
    option.value = state[stateName];
    states.appendChild(option);
  }