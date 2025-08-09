import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Stethoscope } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Stethoscope className="text-primary" />
          <span>Enfermagem</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Início
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Quem Somos
          </Link>
          <Link href="/professionals" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Nossos Profissionais
          </Link>
        </nav>
        <Button asChild>
          <Link href="/contact">Contate-nos</Link>
        </Button>
      </div>
    </header>
  );
}