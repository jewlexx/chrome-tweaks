import { marked } from 'marked';

export async function markdown() {
  const md = $('pre').text();
  $('pre').remove();

  const html = marked(md);
  const mdEl = $(`<div>${html}</div>`);

  $('body')
    .append(mdEl)
    .css('display', 'flex')
    .css('flex-direction', 'column')
    .css('align-items', 'center');
}
