window.setInterval(async () => {
  document.querySelector('#bigCookie').click();
  const products = document.getElementsByClassName('product unlocked enabled');

  Array.from(products).forEach(async product => {
    product.click();
  });
}, 10);

window.setInterval(async () => {
  Game.cookies = Number.MAX_VALUE;
}, 1000);
