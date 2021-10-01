const unsubscribe = () =>
  document.querySelector('[aria-label="Unsubscribe"]')?.click();

const els = document.getElementsByClassName('ytd-subscribe-button-renderer');

Array.from(els)
  .map(el => el.parentElement)
  .forEach(el => {
    el.addEventListener('click', unsubscribe);
  });
