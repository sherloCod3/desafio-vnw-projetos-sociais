import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doacao from "./pages/Doacao";
import Voluntariado from "./pages/Voluntariado";
import Mentoria from "./pages/Mentoria";
import EventosEP from "./pages/EventosEP";
import Usuario from "./pages/Usuario";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Doacao" element={<Doacao />} />
          <Route path="/Voluntariado" element={<Voluntariado />} />
          <Route path="/Mentoria" element={<Mentoria />} />
          <Route path="/EventosEP" element={<EventosEP />} />
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
