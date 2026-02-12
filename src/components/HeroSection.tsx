import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 md:flex-row">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Projetos Sociais que{" "}
            <span className="text-[#205691]">transformam</span>
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            Conectamos empresas a projetos sociais que fazem a diferença.
            Junte-se a nós e transforme vidas através do voluntariado, doações e
            mentoria.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90">
            Cadastrar Empresa
          </Button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={"/src/assets/imgConnect.png"}
            alt="Pessoas ao redor do globo"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
