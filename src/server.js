import routes from './routes';

// Static site rendering
export default (locals, callback) => {
  const render = require('mithril-node-render');

  // Build script tags needed for page
  let scripts = '';
  let preloads = '';
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const js = assets
    .filter(value => value.match(/\.js$/))
    .filter(value => value.indexOf('server') === -1)
    .forEach(script => {
      scripts = scripts + `<script src="/${script}" async></script>`;
      preloads =
        preloads + `<link as="script" rel="preload" href="/${script}"/>`;
    });

  // Render the page
  render(routes[locals.path].render()).then(html => {
    callback(
      null,
      `<html>
        <head>
          <title>mithril-static</title>
          <link rel="stylesheet" type="text/css" href="/client.css" />
          ${preloads}
        </head>
        <body>
        <div id="root">
        ${html}
        </div>
        
        ${scripts}
        </body>
      </html>`
    );
  });
};
