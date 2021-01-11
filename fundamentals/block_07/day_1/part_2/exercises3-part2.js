// Exercise 3 - Part 2
const clickButton = document.getElementById('click-counter');
const counterSpan = document.getElementById('span-counter');
let clickCount = 0;
clickButton.addEventListener('click', () => {
  clickCount += 1;
  counterSpan.innerHTML = clickCount;
});
