import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Voluntariado() {
  const projects = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2b7bc0b3b9b1baf55fc929389dc03e91c316f2f9?width=714",
      title: "Mutirão de reciclagem",
      description: "Coletar materiais recicláveis e orientar sobre descarte consciente.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1d0e41431506f0196f92d67345d69e2700634fa4?width=714",
      title: "Aulas de Tecnologia",
      description: "Ensinar programação e ferramentas digitais para jovens e adultos.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7d9e1c8a5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e?width=714",
      title: "Esporte e Inclusão",
      description: "Promover atividades esportivas que integrem pessoas com deficiência.",
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
            Voluntariado
          </h1>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-20 max-w-[1292px] mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                buttonText="Quero participar"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
