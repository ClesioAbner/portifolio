import { AiOutlineApi } from "react-icons/ai";
import {
  FaAngular,
  FaBug,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPalette,
  FaPhp,
  FaReact,
  FaRocket,
} from "react-icons/fa";
import {
  SiN8N,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import type { Badge, ExperienceItem, Project, Skill } from "./types";

export const skills: Skill[] = [
  {
    name: "Java",
    icon: FaJava,
    color: "#f89820",
    usage: "Desenvolvimento backend robusto e sistemas de larga escala.",
    level: 95,
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    usage: "Criação de APIs RESTful seguras para 100+ usuários simultâneos.",
    level: 90,
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "#777BB4",
    usage: "Manutenção e modernização de sistemas legados.",
    level: 60,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    usage: "Interatividade e dinamismo em interfaces web modernas.",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    usage: "Aplicações front-end e back-end com tipagem estática.",
    level: 85,
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#DD0031",
    usage: "Desenvolvimento de SPAs complexas para o setor corporativo.",
    level: 90,
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    usage: "Criação de UIs reativas e componentes reutilizáveis.",
    level: 60,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    usage: "Construção de microserviços e ferramentas de build.",
    level: 50,
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    usage:
      "Containerização de aplicações para garantir consistência entre ambientes.",
    level: 55,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    usage: "Modelagem e otimização de bancos de dados relacionais.",
    level: 85,
  },
  {
    name: "n8n",
    icon: SiN8N,
    color: "#6A23B7",
    usage: "Automação de workflows e integração entre diferentes APIs.",
    level: 75,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    usage: "Versionamento de código e colaboração em equipe.",
    level: 95,
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2025 - Atual",
    company: "ReluCode",
    description:
      "Co-fundador da ReluCode, empresa de software dedicada a criar aplicações seguras e eficientes, como sistemas de gestão empresarial, cofres de senhas criptografados, soluções para condomínios e landing pages com foco em performance e conversão.",
  },
  {
    period: "2023 - Atual",
    company: "Casa Publicadora Brasileira",
    description:
      "Desenvolvimento e manutenção de sistemas internos críticos para a operação da empresa, utilizando Java com Spring Boot. Foco em APIs RESTful, integração de sistemas e modernização de aplicações legadas.",
  },
  {
    period: "2024 - Atual",
    company: "Freelancer",
    description:
      "Desenvolvimento de projetos sob demanda, incluindo sistemas de gestão empresarial (ERP), gestão de condomínios, cofres de senhas seguros e landing pages otimizadas para conversão.",
  },
  {
    period: "2021 - 2023",
    company: "Suporte Técnico",
    description:
      "Atuação na área de suporte técnico, realizando diagnóstico de problemas, manutenção de hardware e software, e oferecendo suporte a usuários em ambientes corporativos.",
  },
];

export const projects: Project[] = [
 {
      id: 6,
    title: 'Sistema de Gestão de Recibos — Colégio Rhulany',
    description: 'Sistema web para emissão e gestão de recibos escolares com pré-visualização em tempo real e geração de PDF.',
    longDescription: 'Aplicação desenvolvida para o Colégio Rhulany que permite à secretaria emitir recibos de pagamento para alunos, com formulário de dados, pré-visualização em tempo real no formato A4 e arquivo de recibos pesquisável por nome, número ou data.',
    stack: ['React', 'TypeScript', 'SQL', 'CSS', 'Node.js'],
    images: [
        import.meta.env.BASE_URL + '/images/imagem1.png',
        import.meta.env.BASE_URL + '/images/imagem2.png',
    ],
    results: 'Automatizou o processo de emissão de recibos da escola, eliminando o uso de papel e agilizando o atendimento da secretaria.',
    link: '',

    
},
{
    id: 7,
    title: "Sistema de Gestão de Bolos — Kandicioso da Matola",
    description: "Sistema web para gestão de encomendas, produção e vendas de bolos personalizados.",
    longDescription:
      "Aplicação desenvolvida para a Kandicioso da Matola que permite gerir encomendas de bolos personalizados, controlar produção, registar clientes e acompanhar vendas. Interface intuitiva para facilitar o dia a dia da confeitaria.",
    stack: ["React", "TypeScript", "Shadcn/ui", "SQL, Node.js"],
    images: [
      import.meta.env.BASE_URL + '/images/imagem4.png',
      import.meta.env.BASE_URL + '/images/imagem5.png',
    ],
    results:
      "Organizou o processo de encomendas e reduziu erros na gestão de pedidos, melhorando a experiência dos clientes da confeitaria.",
    link: "",
  },

  {
    id: 7,
    title: 'RhulanyTech — E-commerce de Electrónicos',
    description: 'Loja online para venda de produtos electrónicos com catálogo, carrinho e gestão de pedidos.',
    longDescription:
      "Aplicação desenvolvida para a RhulanyTech, especializada na venda de produtos electrónicos. Conta com catálogo de produtos, filtros por categoria, carrinho de compras, gestão de pedidos e painel administrativo para controlo de stock e vendas.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'SQL', 'Node.js'],
    images: [
      import.meta.env.BASE_URL + '/images/imagem6.png',
      import.meta.env.BASE_URL + '/images/imagem7.png',
    ],
    results:
      "Automatizou o processo de encomendas e reduziu erros na gestão de pedidos, melhorando a experiência dos clientes da RhulanyTech.",
    link: "",
  },

  

];








export const badges: Badge[] = [
  {
    name: "Mestre de APIs",
    icon: AiOutlineApi,
    description: "Design e implementação de APIs RESTful escaláveis e seguras.",
  },
  {
    name: "Caçador de Bugs",
    icon: FaBug,
    description: "Habilidade em depuração e resolução de problemas complexos.",
  },
  {
    name: "Designer de UI",
    icon: FaPalette,
    description: "Criação de interfaces intuitivas e esteticamente agradáveis.",
  },
  {
    name: "Foguete de Performance",
    icon: FaRocket,
    description:
      "Otimização de aplicações para máxima velocidade e eficiência.",
  },
];
