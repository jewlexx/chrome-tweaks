const unsubscribe = async () =>
  document.querySelector('[aria-label="Unsubscribe"]')?.click();

Array.from(
  document.getElementsByClassName('ytd-subscribe-button-renderer'),
).forEach(async el => el.parentElement.addEventListener('click', unsubscribe));
