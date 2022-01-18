import { marked } from 'marked';

export async function markdown() {
  const md = $('pre').text();
  const html = marked(md);

  $('pre').html(html);
}
