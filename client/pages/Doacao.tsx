import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Doacao() {
  const projects = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/26d4cdab7a9ec87ee117bbaf487bba873b891516?width=714",
      title: "Instituto grande familia",
      description: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8e3a97a1e4d8b68b8c56e42c98c5745e4cb354f6?width=714",
      title: "Projeto Futuro na Escola",
      description: "Doe livros didáticos e materiais escolares para crianças de comunidades carentes.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ef2dd1e0e41a4e4c1e6d4d4c8e4c8e4c8e4c8e4c?width=714",
      title: "Instituto Conecta Jovem",
      description: "Ajude a fornecer equipamentos de informática para jovens em formação profissional.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
          {/* Page Title */}
          <h1 className="font-source text-4xl sm:text-5xl lg:text-[60px] font-bold text-center mb-12 lg:mb-16" style={{
            color: 'rgba(0, 0, 0, 0)',
            WebkitTextStroke: '2px #000',
          }}>
            Doação
          </h1>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-20 max-w-[1292px] mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                buttonText="Quero Doar"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
