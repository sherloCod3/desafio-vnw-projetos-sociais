import PageLayout from "@/components/PageLayout";
import CardGrid from "@/components/CardGrid";
import { doacoes } from "@/data/mockData";

const Doacao = () => (
  <PageLayout>
    <CardGrid titulo="Doação" projetos={doacoes} />
  </PageLayout>
);

export default Doacao;
