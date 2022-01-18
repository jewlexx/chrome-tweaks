// Click on video title and it copies it
const el = document.querySelector('#container > h1 > yt-formatted-string');

el.addEventListener('click', (e) =>
  navigator.clipboard.writeText(e.currentTarget.innerText),
);

export {};
