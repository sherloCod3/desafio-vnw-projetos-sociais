import { Button } from "@/components/ui/button";
import type { Projeto } from "@/data/mockData";

interface CardProjetoProps {
  projeto: Projeto;
}

const CardProjeto = ({ projeto }: CardProjetoProps) => {
  return (
    <div className="flex h-full flex-col items-center px-6 py-4 text-center">
      <img
        src={projeto.imagem}
        alt={projeto.titulo}
        className="mb-4 h-48 w-full rounded-lg object-cover"
        loading="lazy"
      />
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {projeto.titulo}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">{projeto.descricao}</p>
      <Button className="mt-auto bg-[#205691] text-white hover:bg-[#205691]/90">
        {projeto.botaoTexto}
      </Button>
    </div>
  );
};

export default CardProjeto;
