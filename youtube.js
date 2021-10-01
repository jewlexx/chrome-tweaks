const unsubscribe = async () =>
  document.querySelector('[aria-label="Unsubscribe"]')?.click();

Array.from(document.getElementsByClassName('ytd-subscribe-button-renderer'))
  .map(el => el.parentElement)
  .forEach(async el => el.addEventListener('click', unsubscribe));
