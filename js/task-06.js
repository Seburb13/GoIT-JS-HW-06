const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.target.dataset.length;
  const inputValueLength = event.target.value.length;

  if (inputLength == inputValueLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}