import { ProfessionalCard } from '@/components/ProfessionalCard';
import { professionals } from '@/data/profissionais';
import { Button } from "@/components/ui/button";
import { ArrowDown, Facebook, Instagram, Linkedin, Mouse } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center min-h-[70vh] flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Paixão por Cuidar, <br />
          <span className="text-primary">Segurança para você</span>
        </h1>
        <p className="text-text-muted-foreground max-w-4xl mx-auto mb-10">
          Somos uma turma unida pelo propósito de cuidar. Ao longo da
          nossa formação como Técnicos em Enfermagem, enfrentamos
          desafios, aprendemos juntos e desenvolvemos não só habilidades
          técnicas, mas também laços fortes de amizade e cooperação. Esta
          vitrine é o reflexo de tudo o que construímos: conhecimento,
          dedicação e o desejo genuíno de fazer a diferença na vida das
          pessoas.     
        </p>
        <div className="flex gap-4 mb-8">
          <Button variant="ghost" size="icon"><Facebook /></Button>
          <Button variant="ghost" size="icon"><Instagram /></Button>
          <Button variant="ghost" size="icon"><Linkedin /></Button>
        </div>
        <div className="absolute bottom-0 animate-bounce flex flex-col items-center">
          <Mouse className="h-6 w-6 text-primary mb-1" />
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </section>

      <section id="professionals" className="my-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Encontre o profissional ideal para você
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {professionals.slice(0, 4).map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="link" className="text-primary">
            <Link href="/professionals">
              Ver Lista Completa →
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}