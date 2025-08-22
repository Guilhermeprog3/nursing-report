import { professionals } from '@/data/profissionais';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle2, XCircle, Plane, CalendarClock, Briefcase, User, Sparkles, Info } from 'lucide-react';
import Link from 'next/link';

async function getProfessionalById(id: number) {
  const professional = professionals.find(p => p.id === id);
  if (!professional) {
    notFound();
  }
  return professional;
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProfessionalDetailPage({ params }: PageProps) {
  const { id } = await params;
  const professional = await getProfessionalById(Number(id));
  const whatsappLink = `https://wa.me/${professional.contact.phone.replace(/\D/g, '')}`;

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
        <Image
          src={professional.image}
          alt={`Foto de ${professional.name}`}
          width={150}
          height={150}
          className="rounded-full border-4 border-primary object-cover aspect-square"
        />
        <div className="flex-1 text-center md:text-left pt-4">
          <h1 className="text-4xl font-bold">{professional.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{professional.description}</p>
          <Button asChild variant="link" className="px-0 text-green-400 hover:text-green-500">
            <Link href={whatsappLink} target="_blank">
              <MessageCircle size={16} className="mr-2" />
              Contato Whatsapp
            </Link>
          </Button>
        </div>
      </section>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <Card className="bg-card/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Briefcase size={20} className="mr-2 text-primary" />
                Experiência
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {professional.experience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <User size={20} className="mr-2 text-primary" />
                Sobre Mim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{professional.about}</p>
            </CardContent>
          </Card>

           <Card className="bg-card/20 border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Sparkles size={20} className="mr-2 text-primary" />
                Cursos de Aperfeiçoamento
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-start gap-2">
              {professional.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-base py-1 px-3 border-primary/50 whitespace-normal h-auto">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          <Card className="bg-card/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Info size={20} className="mr-2 text-primary" />
                Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold tracking-tight">E-mail</h4>
                <a href={`mailto:${professional.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {professional.contact.email}
                </a>
              </div>
              <div>
                <h4 className="font-semibold tracking-tight">Telefone</h4>
                <a href={`tel:${professional.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {professional.contact.phone}
                </a>
              </div>
              <div>
                <h4 className="font-semibold tracking-tight">Cidade</h4>
                <p className="text-muted-foreground">{professional.city}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Disponibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center font-semibold tracking-tight">
                  <Plane size={16} className="mr-2 text-primary" />
                  Para Viagens
                </span>
                {professional.disponibilidade_viagem === 'Sim' ? (
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    <CheckCircle2 size={14} className="mr-1" />
                    Sim
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <XCircle size={14} className="mr-1" />
                    Não
                  </Badge>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center font-semibold tracking-tight">
                  <CalendarClock size={16} className="mr-2 text-primary" />
                  Finais de Semana
                </span>
                 {professional.disponibilidade_finais_de_semana === 'Sim' ? (
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    <CheckCircle2 size={14} className="mr-1" />
                    Sim
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <XCircle size={14} className="mr-1" />
                    Não
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}