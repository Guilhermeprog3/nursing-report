import Link from 'next/link';
import { Stethoscope, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-transparent border-t">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="text-primary" />
            <h2 className="text-lg font-bold">Enfermagem 202X - SENAC</h2>
          </div>
          <p className="text-muted-foreground">
            Cada aluno aqui representa a força, o compromisso e a paixão por cuidar. Esta é a vitrine de uma turma pronta para fazer a diferença na saúde.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link href="#" className="text-primary hover:text-foreground">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-primary hover:text-foreground">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-primary hover:text-foreground">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Mapa do Site</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-muted-foreground hover:text-foreground">Início</Link></li>
            <li><Link href="/about" className="text-muted-foreground hover:text-foreground">Quem Somos</Link></li>
            <li><Link href="/professionals" className="text-muted-foreground hover:text-foreground">Nossos Profissionais</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Políticas</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Políticas de Privacidade</Link></li>
            <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Termos de Serviço</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-muted-foreground py-6">
        <p>© Copyright 2025 Turma de Técnicos de Enfermagem — Todos os direitos reservados.</p>
      </div>

      <div className="bg-black/20 py-4">
        <div className="container mx-auto flex items-center justify-center text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
            <span>Desenvolvido por Developer Community</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}