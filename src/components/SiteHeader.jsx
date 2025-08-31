import { NavLink, Link } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-md text-sm font-medium transition";
const linkIdle =
  "text-white/80 hover:text-white hover:bg-white/10";
const linkActive =
  "text-white bg-white/15";

export default function SiteHeader() {
  const nav = [
    { to: "/", label: "Accueil" },
    { to: "/brawl-stars", label: "Brawl Stars" },
    { to: "/clash-royale", label: "Clash Royale" },
    { to: "/dashboard", label: "Tableau de bord" },
    { to: "/login", label: "Connexion" },
    { to: "/register", label: "S’inscrire" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-semibold tracking-wide text-lg hover:text-emerald-400 transition"
        >
          Heroboost
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-2">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
