import Index from './pages/index';
import About from './pages/about';

export default {
  '/': {
    render: () => <Index />,
  },
  '/about': {
    render: () => <About />,
  },
};
