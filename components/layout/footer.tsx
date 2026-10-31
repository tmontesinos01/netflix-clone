const footerLinks = [
  "Preguntas frecuentes",
  "Centro de ayuda",
  "Términos de uso",
  "Privacidad",
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted">
          © 2026 Netflix Clone. Proyecto educativo.
        </p>
      </div>
    </footer>
  );
}