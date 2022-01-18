export function npm() {
  const { pathname } = window.location;
  const el = $(
    `<a href={https://bundlephobia.com${pathname}} target="_blank" style="margin-left: 1em; border-radius: 10px; padding: 10px; background-color: #d3d3d3; border: solid 3px #000;"><img src="https://bundlephobia.com/favicon.ico" style="width: 1em; height: 1em;" alt="BundlePhobia icon" /> Open in BundlePhobia</a>`,
  );
  $('#top > div > h2').append(el); // This selector may need updating in the future
}
