import { marked } from 'marked';

export async function markdown() {
  const md = $('pre').text();
  $('pre').remove();

  const pre = $('<link rel="preconnect" href="https://fonts.gstatic.com">');
  const rob = $(
    '<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">',
  );
  $('head').append(pre, rob);

  const html = marked(md);
  const mdEl = $(`<div>${html}</div>`);

  $('body')
    .append(mdEl)
    .css('display', 'flex')
    .css('flex-direction', 'column')
    .css('align-items', 'center')
    .css('font-family', 'Roboto');
}
