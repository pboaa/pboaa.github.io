type Link = {
  title: string
  desc: string
  href: string
}

type Section = {
  category: string
  links: Link[]
}

const sections: Section[] = [
  {
    category: "SNS",
    links: [
      {
        title: "GitHub",
        desc: "pboaa",
        href: "https://github.com/pboaa",
      },
    ],
  },
  {
    category: "Tools",
    links: [
      {
        title: "Irodori-Tools-Claude",
        desc: "生成と厳選",
        href: "https://pboaa.github.io/irodori-tools-claude/",
      },
      {
        title: "Chronicle-Claude",
        desc: "記録と統計",
        href: "https://github.com/pboaa/chronicle-updates/releases",
      },
    ],
  },
  {
    category: "Games",
    links: [
      {
        title: "Gacha",
        desc: "ガチャと放置",
        href: "https://aa-crafts-test.web.app/",
      },
      {
        title: "Peach-3D-Claude",
        desc: "箱と桃",
        href: "https://pboaa.github.io/peach-3d-claude/",
      },
    ],

  },
]

function App() {
  return (
    <main className="page">
      <h1 className="name">pboaa</h1>
      {sections.map((section) => (
        <section key={section.category} className="section">
          <h2 className="category">{section.category}</h2>
          <nav className="links">
            {section.links.map((link) => (
              <a
                key={link.href}
                className="link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-title">{link.title}</span>
                {link.desc && <span className="link-desc">{link.desc}</span>}
              </a>
            ))}
          </nav>
        </section>
      ))}
    </main>
  )
}

export default App
