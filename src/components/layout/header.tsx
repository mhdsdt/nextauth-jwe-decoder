import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Key, Github } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="content-width h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-lg bg-primary/10">
            <Key className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-semibold truncate">NextAuth v4 JWE Decoder</h1>
            <p className="text-xs text-muted-foreground truncate">
              Decrypt JWE session tokens securely in your browser
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/mhdsdt/nextauth-jwe-decoder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub repository"
            className="inline-flex"
          >
            <Button
              variant="outline"
              size="icon"
              className="relative h-9 w-9 rounded-lg border-border bg-card hover:bg-accent transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">Open GitHub repository</span>
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}