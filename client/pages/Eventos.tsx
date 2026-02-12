import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Eventos() {
  const events = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/21f509c7d308831b9f252b8273a42162b4907c72?width=714",
      title: "Empoderando Jovens para o Futuro",
      description: "Atividade: Palestra motivacional com líderes comunitários sobre autoconfiança e protagonismo juvenil. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0f80b9336b09815bc1318e9fa6c546ed610d9576?width=714",
      title: "Tecnologia que Transforma",
      description: "Atividade: Workshop de introdução à programação e inovação digital. Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7ae17cde6c85789bf3d40435163e323e4675c791?width=714",
      title: "Carreira e Primeiro Emprego",
      description: "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. Impacto: Ajudar jovens a conquistar oportunidades de trabalho.",
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
            Eventos & Palestras
          </h1>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-20 max-w-[1316px] mx-auto">
            {events.map((event, index) => (
              <ProjectCard
                key={index}
                image={event.image}
                title={event.title}
                description={event.description}
                buttonText="Quero Participar"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
