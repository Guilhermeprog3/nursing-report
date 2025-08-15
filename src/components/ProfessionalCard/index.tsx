import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProfessionalCardProps {
  professional: {
    id: number;
    name: string;
    specialty: string;
    image: string;
    contact: {
      phone: string;
    }
  };
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const whatsappLink = `https://wa.me/${professional.contact.phone.replace(/\D/g, '')}`;

  return (
    <Card className="text-center bg-card/20 border-border hover:border-primary transition-all overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={professional.image}
          alt={`Foto de ${professional.name}`}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-4">
        <CardTitle className="text-lg">{professional.name}</CardTitle>
        <CardDescription>{professional.specialty}</CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 px-4 pb-4">
        <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
          <Link href={whatsappLink} target="_blank">
            Contato Whatsapp
          </Link>
        </Button>
        
        <Button asChild className="w-full" variant="outline">
          <Link href={`/detail/${professional.id}`}>
            Veja mais Detalhes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}