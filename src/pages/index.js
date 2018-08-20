import Link from '../components/Link';

export default {
  count: 0,
  view: ({ state }) => (
    <main>
      <h1>mithril-static</h1>

      <nav>
        <Link to="/about">About</Link>
      </nav>

      <p>
        A proof-of-concept of a mithril.js static site generator. Find{' '}
        <a href="https://github.com/fabe/mithril-static">the source</a> on
        GitHub.
      </p>

      <button onclick={() => state.count++}>Pressed: {state.count}</button>
    </main>
  ),
};
