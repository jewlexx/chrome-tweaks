import jquery from 'jquery';
import { npm } from './npm';
import { youtube } from './youtube';
import { twitch } from './twitch';
import { markdown } from './markdown';
window.$ = jquery;

const testUrl = (regex: RegExp) => {
  return regex.test(window.location.href);
};

switch (true) {
  case testUrl(/^https:\/\/www.npmjs.com\/package\/./):
    npm();
    break;
  case testUrl(/^https:\/\/www.youtube.com\/watch\?v=/):
    youtube();
    break;
  case testUrl(/^https:\/\/www.twitch.tv/):
    twitch();
    break;
  case testUrl(/\.mdx$/):
    markdown();
    break;
}
