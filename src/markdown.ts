import { marked } from 'marked';

export async function markdown() {
  const mdReg = /\.mdx?$/;
  const isMd = mdReg.test(window.location.href);

  if (!isMd) {
    return;
  }

  const md = $('pre').text();
  const html = marked(md);

  $('pre').html(html);
}
