interface StatCardProps {
  valor: string;
  descricao: string;
}

const StatCard = ({ valor, descricao }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <span className="text-4xl font-bold text-[#205691]">{valor}</span>
      <span className="mt-2 text-sm text-muted-foreground">{descricao}</span>
    </div>
  );
};

export default StatCard;
