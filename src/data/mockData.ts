export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  botaoTexto: string;
}

export const doacoes: Projeto[] = [
  {
    id: 1,
    titulo: "Instituto Criança Feliz",
    descricao: "Ajude crianças em situação de vulnerabilidade social com doações de alimentos, roupas e materiais escolares.",
    imagem: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
    botaoTexto: "Quero Doar",
  },
  {
    id: 2,
    titulo: "ONG Mãos que Ajudam",
    descricao: "Contribua para projetos de moradia e assistência social em comunidades carentes do Rio de Janeiro.",
    imagem: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop",
    botaoTexto: "Quero Doar",
  },
  {
    id: 3,
    titulo: "Projeto Esperança Viva",
    descricao: "Doe para apoiar programas de alimentação e educação para famílias em situação de rua.",
    imagem: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    botaoTexto: "Quero Doar",
  },
];

export const voluntariados: Projeto[] = [
  {
    id: 1,
    titulo: "Mutirão de Limpeza Urbana",
    descricao: "Participe do mutirão de limpeza e revitalização de praças e espaços públicos da comunidade.",
    imagem: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
  {
    id: 2,
    titulo: "Aulas de Reforço Escolar",
    descricao: "Voluntarie-se para dar aulas de reforço em matemática, português e ciências para jovens.",
    imagem: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
  {
    id: 3,
    titulo: "Distribuição de Alimentos",
    descricao: "Ajude na organização e distribuição de cestas básicas para famílias em vulnerabilidade.",
    imagem: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
];

export const mentorias: Projeto[] = [
  {
    id: 1,
    titulo: "Mentoria em Tecnologia",
    descricao: "Programa de mentoria para jovens interessados em carreiras de programação e desenvolvimento web.",
    imagem: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
  {
    id: 2,
    titulo: "Mentoria Empreendedora",
    descricao: "Orientação para empreendedores iniciantes sobre gestão, finanças e plano de negócios.",
    imagem: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
  {
    id: 3,
    titulo: "Mentoria de Carreira",
    descricao: "Acompanhamento profissional para jovens em busca do primeiro emprego e desenvolvimento pessoal.",
    imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
];

export const eventos: Projeto[] = [
  {
    id: 1,
    titulo: "Palestra: Impacto Social",
    descricao: "Palestra sobre como empresas podem gerar impacto social positivo nas comunidades locais.",
    imagem: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
  {
    id: 2,
    titulo: "Workshop de Liderança",
    descricao: "Workshop prático sobre liderança comunitária e mobilização de voluntários para projetos sociais.",
    imagem: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
  {
    id: 3,
    titulo: "Feira de Voluntariado",
    descricao: "Evento para conectar empresas, ONGs e voluntários em busca de oportunidades de impacto social.",
    imagem: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
    botaoTexto: "Quero Participar",
  },
];

export const usuario = {
  nome: "Alexandre Cavalari",
  email: "alexandre.cavalari@outlook.com",
  avatar: "/src/assets/1764689576149.png",
  bio: "Construo sistemas web que transformam processos reais em soluções simples, escaláveis e prontas para produção.",
  role: "Full Stack Developer",
  location: "Lençóis Paulista, SP",
  availability: "Disponível para Dev",
  skills: [ "React", "Node.js", "TypeScript", "SQL", "APIs REST" ],
  githubUrl: "https://github.com/sherloCod3",
  linkedinUrl: "https://www.linkedin.com/in/alexandre-cavalari-lp/",
};
