export function twitch() {
  setInterval(() => {
    const el = $('[aria-label="Claim Bonus"]');

    if (el) el.trigger('click');
  }, 5e3);
}
