export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Gabriel Barreto. Todos os direitos reservados.
        </p>
        <a
          href="#"
          className="font-mono text-sm font-bold text-foreground transition-colors hover:text-primary"
        >
          Gabriel<span className="text-primary">.</span>
        </a>
      </div>
    </footer>
  )
}
