import { ProfessionalCard } from '@/components/ProfessionalCard';
import { professionals } from '@/data/profissionais';
import { Button } from "@/components/ui/button";
import { ArrowDown, Facebook, Instagram, Linkedin, Mouse } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 bg-background">
      <section className="text-center min-h-[70vh] flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-background bg-repeat -z-10 opacity-20"></div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Paixão por Cuidar, <br />
          <span className="text-primary">Segurança para você</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Apresentamos uma geração de enfermeiros preparados para oferecer serviços de qualidade, com ética e foco no bem-estar de todos.
        </p>
        <div className="flex gap-4 mb-8">
            <Button variant="ghost" size="icon"><Facebook/></Button>
            <Button variant="ghost" size="icon"><Instagram/></Button>
            <Button variant="ghost" size="icon"><Linkedin/></Button>
        </div>
        <div className="absolute bottom-10 animate-bounce flex flex-col items-center">
            <Mouse className="h-6 w-6 text-primary mb-1"/>
            <ArrowDown className="h-6 w-6 text-primary"/>
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