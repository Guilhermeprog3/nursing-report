import { ProfessionalCard } from '@/components/ProfessionalCard';
import { professionals } from '@/data/profissionais';

export default function ProfessionalsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section id="professionals">
        <h1 className="text-3xl font-bold text-center mb-12">
          Encontre o profissional ideal para você:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      </section>
    </div>
  );
}