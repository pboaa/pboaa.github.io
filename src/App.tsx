// リンクはここを編集するだけで増減できます
const links = [
  { label: "GitHub", href: "https://github.com/pboaa" },
  // { label: "X", href: "https://x.com/..." },
  // { label: "Blog", href: "https://..." },
];

function App() {
  return (
    <main className="page">
      <h1 className="name">pboaa</h1>
      <nav className="links">
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </nav>
    </main>
  );
}

export default App;
