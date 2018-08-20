import Link from '../components/Link';

export default {
  count: 0,
  view: ({ state }) => (
    <main>
      <h1>mithril-static</h1>

      <nav>
        <Link to="/about">About</Link>
      </nav>

      <button onclick={() => state.count++}>Pressed: {state.count}</button>
    </main>
  ),
};
