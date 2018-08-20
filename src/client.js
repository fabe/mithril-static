import routes from './routes';

const root = document.getElementById('root');

// Enable pathname routing
m.route.prefix('');

// Mount router
m.route(root, '/', routes);
