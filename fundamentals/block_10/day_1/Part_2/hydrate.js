function hydrate(ticket) {
  const split = ticket.split('');
  let cupOfWater = 0;
  split.forEach((letter) => {
    const number = parseInt(letter, 10);
    if (!isNaN(number)) {
      cupOfWater += number;
    }
  });
  if (cupOfWater === 1) return '1 copo de água';
  return `${cupOfWater} copos de água`;
}

module.exports = hydrate;