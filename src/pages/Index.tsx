import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import StatCard from "@/components/StatCard";

const stats = [
  { valor: "500+", descricao: "Empresas Voluntárias" },
  { valor: "1.2K+", descricao: "Projetos Realizados" },
  { valor: "50K+", descricao: "Vidas Impactadas" },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <section className="py-12">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16">
          {stats.map((stat) => (
            <StatCard key={stat.descricao} valor={stat.valor} descricao={stat.descricao} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
