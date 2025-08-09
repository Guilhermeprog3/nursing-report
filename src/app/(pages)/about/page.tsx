import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Image src="/turma-reunida3.jpeg" alt="Primeira imagem da turma" width={800} height={300} className="object-cover rounded-md" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Image src="/turma-reunida.jpeg" alt="Segunda imagem da turma" width={800} height={300} className="object-cover rounded-md" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Image src="/turma-reunida2.jpeg" alt="Terceira imagem da turma" width={800} height={300} className="object-cover rounded-md" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto max-w-7xl px-4 py-12">
        <section className="mb-12">
          <h1 className="text-2xl font-bold mb-6">Quem Somos?</h1>
        </section>

        <section className="flex justify-center mb-12">
          <CarouselDemo />
        </section>

        <section className="space-y-8 mb-12">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#030D30]">Nossa História</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#030D30]">
                Somos uma turma unida pelo propósito de cuidar. Ao longo da
                nossa formação como Técnicos em Enfermagem, enfrentamos
                desafios, aprendemos juntos e desenvolvemos não só habilidades
                técnicas, mas também laços fortes de amizade e cooperação. Esta
                vitrine é o reflexo de tudo o que construímos: conhecimento,
                dedicação e o desejo genuíno de fazer a diferença na vida das
                pessoas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-[#FFFFFF]">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFFFFF]">
                Nossa missão é oferecer cuidado com excelência,
                responsabilidade e empatia. Estamos comprometidos em aplicar
                nosso conhecimento técnico para promover saúde, acolhimento e
                bem-estar, respeitando a dignidade de cada pessoa. Acreditamos
                que, com humanidade e profissionalismo, podemos transformar o
                mundo – um paciente por vez.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}