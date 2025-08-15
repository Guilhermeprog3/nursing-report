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
          Somos uma plataforma que conecta pacientes e seus familiares a técnicos de
          enfermagem qualificados, com o objetivo de oferecer um atendimento
          humanizado, seguro e acessível. Nosso foco é cuidar das pessoas de forma
          que elas se sintam respeitadas com dignidade e conforto, sempre seguindo
          padrões éticos e técnicos bem rigorosos. Trabalhamos com empatia,
          transparência e dedicação à excelência, buscando melhorar constantemente a
          experiência de quem confia em nossos serviços e fortalecendo a relação de
          confiança entre profissionais e pacientes.        
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