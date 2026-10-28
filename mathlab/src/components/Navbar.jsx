import { levelFromXp } from "../utils/progress"

const links = [
  { id: "home", label: "Bosh sahifa" },
  { id: "lessons", label: "Darslar" },
  { id: "practice", label: "Mashqlar" },
  { id: "quiz", label: "Test" },
  { id: "progress", label: "Natijalar" },
]

export default function Navbar({ page, onNavigate, xp, theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button
          type="button"
          className="brand"
          onClick={() => onNavigate("home")}
          aria-label="MathLab bosh sahifasi"
        >
          <span className="brand-mark" aria-hidden="true">
            ∑
          </span>
          <span className="brand-text">
            Math<span>Lab</span>
          </span>
        </button>

        <nav className="nav-links" aria-label="Asosiy navigatsiya">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`nav-link ${page === link.id ? "active" : ""}`}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <span className="xp-pill" title="To'plangan tajriba ballari">
            <span className="xp-dot" aria-hidden="true" />
            {xp} XP
            <span className="xp-level">Lv {levelFromXp(xp)}</span>
          </span>
          <button
            type="button"
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Yorug' rejimga o'tish" : "Qorong'i rejimga o'tish"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
                </g>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                <path
                  d="M20.5 14.2A8.7 8.7 0 0 1 9.8 3.5a8.7 8.7 0 1 0 10.7 10.7Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
