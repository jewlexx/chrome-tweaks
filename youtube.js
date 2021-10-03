const unsubscribe = async () =>
  document.querySelector('[aria-label="Unsubscribe"]')?.click();

Array.from(
  document.getElementsByClassName('ytd-subscribe-button-renderer'),
).forEach(async el => el.parentElement.addEventListener('click', unsubscribe));

// Click on video title and it copies it

if (window.location.pathname.includes('watch')) {
  const el = document.querySelector('#container > h1 > yt-formatted-string');
  el.addEventListener('click', e =>
    navigator.clipboard.writeText(e.currentTarget.innerText),
  );
}
