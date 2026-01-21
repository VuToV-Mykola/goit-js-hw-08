const bodyElement = document.body;
const colorValue = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const applyRandomColor = () => {
  const nextColor = getRandomHexColor();
  bodyElement.style.backgroundColor = nextColor;
  colorValue.textContent = nextColor;
};

changeColorButton.addEventListener('click', applyRandomColor);
