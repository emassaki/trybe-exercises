const skills = ['Git', 'HTML', 'CSS', 'JavaScript', 'NodeJS'];

function func1(string) {
  let tryber = 'Tryber x aqui!';
  let name = tryber.replace('x', string);
  return name;
}

function func2() {
  const orderedSkills = skills.sort();
  let string = `${func1('Massaki')}\nMinhas 5 melhores habilidades são:\n`;
  orderedSkills.forEach((skill, index) => {
    string = `${string} \n ${index+1} - ${skill};`
  });
  string = `${string}\n\n#goTrybe`;
  return string;
}
console.log(func2())