import PageLayout from "@/components/PageLayout";
import CardGrid from "@/components/CardGrid";
import { mentorias } from "@/data/mockData";

const Mentoria = () => (
  <PageLayout>
    <CardGrid titulo="Mentoria" projetos={mentorias} />
  </PageLayout>
);

export default Mentoria;
