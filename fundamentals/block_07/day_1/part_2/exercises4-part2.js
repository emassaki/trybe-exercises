const skills = ['Git', 'HTML', 'CSS', 'JavaScript', 'NodeJS'];

const tryber = (name) => `Tryber ${name} aqui!`;

function trberSkills() {
  const sortedSkills = skills.sort();
  let result = `${tryber('Massaki')}

  Minhas 5 melhores habilidades são:`;
  sortedSkills.forEach((skill, index) => {
    result = `${result}
    ${index + 1} - ${skill};`;
  });
  result = `${result}
  #goTrybe`;
  return result;
}
console.log(trberSkills());
