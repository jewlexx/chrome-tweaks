setInterval(function () {
  const el = document.querySelector<HTMLButtonElement>(
    '[aria-label="Claim Bonus"]',
  );

  if (el) el.click();
}, 5e3);

export {};
