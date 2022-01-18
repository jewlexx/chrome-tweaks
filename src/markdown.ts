import { marked } from 'marked';

(async () => {
  const mdReg = /\.mdx?$/;
  const isMd = mdReg.test(window.location.href);

  if (!isMd) {
    console.log('Is not markdown... Goodbye :)');
    return;
  }

  const md = document.querySelector('pre')!.innerHTML;

  console.log(md);

  const html = marked(md);

  document.body.innerHTML = html;
})();

export {};
