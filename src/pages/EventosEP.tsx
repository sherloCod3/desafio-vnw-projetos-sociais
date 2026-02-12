import PageLayout from "@/components/PageLayout";
import CardGrid from "@/components/CardGrid";
import { eventos } from "@/data/mockData";

const EventosEP = () => (
  <PageLayout>
    <CardGrid titulo="Eventos e Palestras" projetos={eventos} />
  </PageLayout>
);

export default EventosEP;
