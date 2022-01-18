const pathname = window.location.pathname;
const el = document.createElement('a');

(el.innerHTML =
  '<img src="https://bundlephobia.com/favicon.ico" style="width: 1em; height: 1em;" alt="BundlePhobia icon" /> Open in BundlePhobia'),
  (el.style =
    'margin-left: 1em; border-radius: 10px; padding: 10px; background-color: #d3d3d3; border: solid 3px #000;'),
  (el.href = `https://bundlephobia.com${pathname}`),
  (el.target = '_blank'),
  document.querySelector('#top > div > h2')?.appendChild(el); // This selector may need updating in the future

export {};
