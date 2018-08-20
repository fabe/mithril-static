import Link from '../components/Link';

let count = 0;

export default {
  view: () => (
    <main>
      <h1>mithril-static</h1>

      <nav>
        <Link to="/about">About</Link>
      </nav>

      <button onclick={() => count++}>Pressed: {count}</button>
    </main>
  ),
};
