let reg = /^https:\/\/www.npmjs.com\/package\/./;

const isUrl = () => {
  return reg.test(window.location.href);
};

(() => {
  if (isUrl()) {
    require('./npm.js');
    return;
  }

  reg = /^https:\/\/www.youtube.com\/watch\?v=/;

  if (isUrl()) {
    require('./youtube.js');
    return;
  }

  reg = /^https:\/\/www.twitch.tv/;
  if (isUrl()) {
    require('./twitch.js');
    return;
  }

  reg = /\.mdx?$/;
  if (isUrl()) {
    require('./markdown.js');
    return;
  }
})();
