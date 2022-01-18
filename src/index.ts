let reg = /^https:\/\/www.npmjs.com\/package\/./;

const isUrl = () => {
  return reg.test(window.location.href);
};

(() => {
  if (isUrl()) {
    import('./npm');
    return;
  }

  reg = /^https:\/\/www.youtube.com\/watch\?v=/;

  if (isUrl()) {
    import('./youtube');
    return;
  }

  reg = /^https:\/\/www.twitch.tv/;
  if (isUrl()) {
    import('./twitch');
    return;
  }

  reg = /\.mdx?$/;
  if (isUrl()) {
    import('./markdown');
    return;
  }
})();
