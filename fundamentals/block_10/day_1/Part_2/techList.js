const techList = (tech, name) => {
  if (!tech.length) return 'Vazio!';
  return tech.sort().map((element) => ({ tech: element, name }));
};

module.exports = techList;
