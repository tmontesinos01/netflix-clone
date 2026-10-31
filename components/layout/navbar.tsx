import Link from "next/link";

const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Series", href: "/series" },
  { label: "Películas", href: "/movies" },
  { label: "Mi lista", href: "/my-list" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary"
        >
          NETFLIX
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="text-sm text-foreground hover:text-muted"
          >
            Buscar
          </Link>

          <button
            className="rounded-md bg-surface px-3 py-2 text-sm"
          >
            Perfil
          </button>
        </div>

      </nav>
    </header>
  );
}