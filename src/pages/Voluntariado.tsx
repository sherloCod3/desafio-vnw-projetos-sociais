import PageLayout from "@/components/PageLayout";
import CardGrid from "@/components/CardGrid";
import { voluntariados } from "@/data/mockData";

const Voluntariado = () => (
  <PageLayout>
    <CardGrid titulo="Voluntariado" projetos={voluntariados} />
  </PageLayout>
);

export default Voluntariado;
