# Plataforma de Conexão Social

Aplicação web desenvolvida para conectar iniciativas sociais, voluntários e apoiadores, promovendo impacto positivo por meio de uma experiência digital moderna, acessível e responsiva.

O projeto simula o desenvolvimento de uma solução real para uma organização que busca ampliar visibilidade, engajamento e alcance social através da tecnologia.

---

## Visão Geral

A plataforma tem como objetivos principais:

* Dar visibilidade a projetos sociais
* Apresentar informações de forma clara e acessível
* Facilitar a conexão entre voluntários, organizações e apoiadores
* Incentivar engajamento e transformação social
* Transmitir confiança e profissionalismo por meio do design

---

## Stack Tecnológica

* React.js
* React Router DOM
* SCSS (estrutura modular)
* Google Fonts (Inter / Source Sans 3)

O projeto não utiliza frameworks CSS ou bibliotecas de UI prontas, priorizando domínio de fundamentos e organização arquitetural.

---

## Estrutura do Projeto

```
src/
 ├── components/
 │    ├── Header
 │    ├── Footer
 │    ├── CardProjeto
 │    ├── CardVoluntario
 │
 ├── pages/
 │    ├── Home
 │    ├── Doacao
 │    ├── Voluntariado
 │    ├── Mentoria
 │    ├── EventosEP
 │    ├── Usuario
 │
 ├── styles/
 │    ├── _variables.scss
 │    ├── _mixins.scss
 │    ├── global.scss
 │
 ├── routes.jsx
 └── App.jsx
```

### Princípios aplicados

* Componentização reutilizável
* Separação clara entre layout, páginas e estilos
* Organização modular de SCSS
* Uso de variáveis para cores, tipografia e espaçamentos
* Estrutura preparada para evolução e manutenção

---

## Rotas Implementadas

| Rota            | Descrição                                                |
| --------------- | -------------------------------------------------------- |
| `/`             | Página inicial com apresentação da plataforma e projetos |
| `/Doacao`       | Página de doação                                         |
| `/Voluntariado` | Projetos disponíveis para voluntariado                   |
| `/Mentoria`     | Projetos com oportunidades de mentoria                   |
| `/EventosEP`    | Eventos e palestras                                      |
| `/Usuario`      | Perfil do usuário                                        |

As rotas são organizadas em arquivo dedicado, mantendo clareza estrutural e responsabilidade isolada.

---

## Diretrizes de Design

### Paleta

* Azul: confiança e tecnologia
* Laranja: impacto social e esperança
* Branco: simplicidade e acessibilidade

### Tipografia

* Inter
* Source Sans 3

Foco em legibilidade, hierarquia visual consistente e contraste equilibrado.

---

## Responsividade

A aplicação foi desenvolvida com abordagem responsiva utilizando:

* Unidades relativas (`%`, `rem`, `vh`, `vw`)
* `max-width` para controle de layout
* Media queries para adaptação entre dispositivos

Compatível com mobile, tablet e desktop.

---

## Restrições Técnicas Respeitadas

* Sem uso de frameworks CSS (Bootstrap, Tailwind, etc.)
* Sem bibliotecas de UI prontas
* Sem plugins externos de layout

A proposta prioriza domínio de CSS e organização estrutural.

---

## Competências Demonstradas

* Organização e padronização de código
* Componentização eficiente
* Gerenciamento de rotas com React Router
* Estilização profissional com SCSS
* Estrutura escalável
* Responsividade aplicada corretamente

---

## Como Executar

```bash
git clone <url-do-repositorio>
npm install
npm run dev
```

---

## Considerações Finais

Este projeto foi desenvolvido com foco em qualidade técnica, organização e boas práticas de frontend moderno, simulando um cenário real de mercado e reforçando fundamentos essenciais para aplicações escaláveis.
