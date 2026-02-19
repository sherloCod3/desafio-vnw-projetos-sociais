import CardProjeto from "@/components/CardProjeto";
import { Separator } from "@/components/ui/separator";
import type { Projeto } from "@/data/mockData";

interface CardGridProps {
  titulo: string;
  projetos: Projeto[];
}

const CardGrid = ({ titulo, projetos }: CardGridProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
          {titulo}
        </h2>
        <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center rounded-xl bg-card p-6 shadow-sm md:flex-row">
          {projetos.map((projeto, index) => (
            <div key={projeto.id} className="flex flex-1 flex-col md:flex-row">
              <CardProjeto projeto={projeto} />
              {index < projetos.length - 1 && (
                <>
                  <Separator
                    orientation="vertical"
                    className="hidden self-stretch md:block"
                  />
                  <Separator
                    orientation="horizontal"
                    className="my-4 md:hidden"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
