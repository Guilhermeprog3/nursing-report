import { professionals } from '@/data/profissionais';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

async function getProfessionalById(id: number) {
  const professional = professionals.find(p => p.id === id);
  if (!professional) {
    notFound();
  }
  return professional;
}

export default async function ProfessionalDetailPage({ params }: { params: { id: string } }) {
  const professional = await getProfessionalById(Number(params.id));

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
            <Link href="#">
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
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold tracking-tight">Credenciais</h4>
                <p className="text-muted-foreground">{professional.credentials.crm}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold tracking-tight">Instituição</h4>
                <p className="text-muted-foreground">{professional.institution}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold tracking-tight">Cidade</h4>
                <p className="text-muted-foreground">{professional.city}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Habilidades Técnicas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2">
              {professional.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-base py-1 px-3 border-primary/50">
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