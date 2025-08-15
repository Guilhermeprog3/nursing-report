export default function Loading() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 animate-pulse">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
        <div className="rounded-full bg-muted h-36 w-36"></div>
        <div className="flex-1 text-center md:text-left pt-4">
          <div className="h-10 bg-muted rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-muted rounded w-full"></div>
        </div>
      </section>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-card/20 border-primary/20 p-6 rounded-lg">
            <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
          <div className="bg-card/20 border-primary/20 p-6 rounded-lg">
            <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-card/20 border-primary/20 p-6 rounded-lg">
            <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
          <div className="bg-card/20 border-primary/20 p-6 rounded-lg">
            <div className="h-8 bg-muted rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}