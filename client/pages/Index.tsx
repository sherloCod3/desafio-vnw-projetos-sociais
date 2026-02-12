import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-10 relative z-10">
              {/* Heading */}
              <div className="space-y-0">
                <h1 className="font-source text-5xl sm:text-6xl lg:text-[90px] font-bold leading-tight" style={{
                  color: 'rgba(0, 0, 0, 0)',
                  WebkitTextStroke: '2px #205691',
                }}>
                  Projetos Sociais
                </h1>
                <h1 className="font-source text-5xl sm:text-6xl lg:text-[90px] font-bold leading-tight text-brand-blue -mt-2">
                  que transformam
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-brand-blue font-helvetica text-lg lg:text-2xl leading-[150%] max-w-[656px]">
                Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.
              </p>

              {/* CTA Button */}
              <Link
                to="/doacao"
                className="inline-flex items-center justify-center gap-4 bg-brand-coral text-white font-source text-xl lg:text-2xl font-semibold px-8 py-4 rounded hover:bg-brand-coral/90 transition-colors h-16 w-full sm:w-auto"
              >
                Cadastrar Empresa
                <ArrowRight className="w-6 h-6" />
              </Link>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 lg:gap-12 pt-4 lg:pt-8 justify-center sm:justify-start">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-brand-blue font-source text-4xl lg:text-5xl font-bold leading-[40px]">500+</div>
                  <div className="text-brand-blue font-helvetica text-sm lg:text-base leading-[120%] text-center">Empresas Voluntárias</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-brand-blue font-source text-4xl lg:text-5xl font-bold leading-[40px]">1.2K+</div>
                  <div className="text-brand-blue font-helvetica text-sm lg:text-base leading-[120%] text-center">Projetos Realizados</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-brand-blue font-source text-4xl lg:text-5xl font-bold leading-[40px]">50K+</div>
                  <div className="text-brand-blue font-helvetica text-sm lg:text-base leading-[120%] text-center">Vidas Impactadas</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image (Desktop) */}
            <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:w-[50%] lg:h-[859px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/897aac880d5ceebab6ba9bd74b9561d3034f452a?width=1394"
                alt="Hands holding colorful paper people and a globe"
                className="w-full h-full object-contain object-right"
              />
            </div>

            {/* Right Column - Image (Mobile/Tablet) */}
            <div className="lg:hidden flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/897aac880d5ceebab6ba9bd74b9561d3034f452a?width=1394"
                alt="Hands holding colorful paper people and a globe"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
