const btnCounter = document.getElementById('counter');
const showCounter = document.getElementById('show-counter');
let count = 0;

btnCounter.addEventListener('click', () => {
  count += 1;
  showCounter.innerHTML = count;
});
