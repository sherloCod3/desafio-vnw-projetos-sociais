import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import { Check } from "lucide-react";

export default function Mentoria() {
  const [showSuccess, setShowSuccess] = useState(false);

  const projects = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0f62725685caf69b5febbcb596e35e2e4c344e79?width=714",
      title: "Mentoria de Carreira e Emprego",
      description: "Orientação profissional para jovens que buscam oportunidades no mercado de trabalho.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d?width=714",
      title: "Compartilhe Experiência",
      description: "Mentores compartilham vivências e conhecimentos em suas áreas de atuação.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0?width=714",
      title: "Acompanhamento",
      description: "Acompanhamento individual para desenvolver habilidades e alcançar metas profissionais.",
    },
  ];

  const handleParticipate = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-8 z-50 flex items-center gap-3 bg-white shadow-lg rounded-lg px-6 py-4 border border-gray-200 animate-in slide-in-from-right">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-gray-700 font-helvetica text-base">Inscrito com sucesso!</p>
        </div>
      )}

      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
          {/* Page Title */}
          <h1 className="font-source text-4xl sm:text-5xl lg:text-[60px] font-bold text-center mb-12 lg:mb-16" style={{
            color: 'rgba(0, 0, 0, 0)',
            WebkitTextStroke: '2px #000',
          }}>
            Mentoria
          </h1>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-20 max-w-[1296px] mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                buttonText="Quero participar"
                onButtonClick={handleParticipate}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
