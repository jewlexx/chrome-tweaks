import { marked } from 'marked';

export async function markdown() {
  const mdReg = /\.mdx?$/;
  const isMd = mdReg.test(window.location.href);

  if (!isMd) {
    console.log('Is not markdown... Goodbye :)');
    return;
  }

  const md = $('pre').text();

  console.log(md);

  const html = marked(md);

  $('pre').html(html);
}
