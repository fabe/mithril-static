import routes from './routes';
import './index.css';

const root = document.getElementById('root');

// Enable pathname routing
m.route.prefix('');

// Mount router
m.route(root, '/', routes);
