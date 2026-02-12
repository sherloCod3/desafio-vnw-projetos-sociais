import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-6 py-20">
          <h1 className="font-source text-6xl lg:text-[90px] font-bold text-brand-blue mb-6">
            404
          </h1>
          <p className="text-brand-blue font-helvetica text-2xl mb-8">
            Página não encontrada
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand-coral text-white font-source text-2xl font-semibold px-8 py-4 rounded hover:bg-brand-coral/90 transition-colors"
          >
            Voltar para Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
