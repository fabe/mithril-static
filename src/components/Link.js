export default {
  view: ({ attrs, children }) => (
    <a href={attrs.to} oncreate={m.route.link}>
      {children}
    </a>
  ),
};
