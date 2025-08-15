import { professionals } from '@/data/profissionais';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

// Esta função ajuda o Next.js a saber quais páginas criar durante o build.
export async function generateStaticParams() {
  return professionals.map((professional) => ({
    id: professional.id.toString(),
  }));
}

// A função agora é síncrona, o que simplifica a inferência de tipos.
function getProfessionalById(id: number) {
  const professional = professionals.find(p => p.id === id);
  if (!professional) {
    notFound();
  }
  return professional;
}

// A tipagem está correta, e a remoção do `await` desnecessário na busca dos dados
// torna o código mais limpo.
export default async function ProfessionalDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const professional = getProfessionalById(Number(id));
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
            <Link href={whatsappLink} target='_blank'>
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
              <CardTitle className="text-xl">Experiência</CardTitle>
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
              <CardTitle className="text-xl">Sobre Mim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{professional.about}</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          <Card className="bg-card/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Informações</CardTitle>
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
                <h4 className="font-semibold tracking-tight">Instituição</h4>
                <p className="text-muted-foreground">{professional.institution}</p>
              </div>
              <div>
                <h4 className="font-semibold tracking-tight">Cidade</h4>
                <p className="text-muted-foreground">{professional.city}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/20 border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-xl">Habilidades Técnicas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2">
              {professional.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-base py-1 px-3 border-primary/50 whitespace-normal h-auto">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}