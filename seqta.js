window.addEventListener('load', () => {
  /** @type {HTMLInputElement} */
  const emailInput = document.getElementsByClassName(
    'credentials_input_text',
  )[0];
  /** @type {HTMLInputElement} */
  const pwInput = document.getElementsByClassName(
    'credentials_input_password',
  )[0];

  emailInput.focus();

  const keyEvent = new Event('KeyboardEvent');
  keyEvent.key = 'J';

  document.dispatchEvent(keyEvent);
});
