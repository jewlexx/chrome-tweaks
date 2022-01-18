import jquery from 'jquery';
import { npm } from './npm';
import { youtube } from './youtube';
import { twitch } from './twitch';
import { markdown } from './markdown';

let reg = /^https:\/\/www.npmjs.com\/package\/./;

const isUrl = () => {
  return reg.test(window.location.href);
};

(async () => {
  window.$ = jquery;

  if (isUrl()) {
    npm();
    return;
  }

  reg = /^https:\/\/www.youtube.com\/watch\?v=/;

  if (isUrl()) {
    youtube();
    return;
  }

  reg = /^https:\/\/www.twitch.tv/;
  if (isUrl()) {
    twitch();
    return;
  }

  reg = /\.mdx?$/;
  if (isUrl()) {
    markdown();
    return;
  }
})();
