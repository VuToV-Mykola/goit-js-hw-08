const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handleNameInput = (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  event.currentTarget.value = trimmedValue;
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
};

nameInput.addEventListener('input', handleNameInput);
