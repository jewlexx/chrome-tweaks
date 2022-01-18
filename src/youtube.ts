export function youtube() {
  const el = $('#container > h1 > yt-formatted-string');

  el.on('click', () => {
    navigator.clipboard.writeText(el.text());
  });
}
