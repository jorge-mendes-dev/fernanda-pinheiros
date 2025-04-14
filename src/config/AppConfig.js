export const AppConfig = {
  site_name: 'Nutricionista Fernanda Souza',
  title: 'Nutricionista Fernanda Souza',
  description: 'Olá! Sou Fernanda, nutricionista dedicada ao bem-estar e à qualidade de vida dos meus pacientes.',
  locale: 'pt-br',
  url: '/',
  bg_color: '#236721531',
  keywords: ['Nutricionista', 'Clinica', 'Saúde', 'Bem-estar', 'nutrição materno infantil', 'adulto', 'nutrição', 'nutrição clínica', 'nutrição esportiva'],
  company: {
    title: 'Fernanda Souza',
    logo: {
      src: '/assets/images/logo.svg',
      alt: 'Fernanda Souza',
    },
  },
  social: {
    instagram: 'https://www.instagram.com/nutri_fernandasouza/profilecard/',
    linkedin: 'https://www.linkedin.com/in/nutri-fernanda-pinheiros/',
  },
  navigation: [
    { name: 'Sobre mim', href: '#about' },
    { name: 'Formação', href: '#curriculum' },
    { name: 'Carreira', href: '#work' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Dicas', href: '#tips' }
  ],
  header: {
    tag: 'NUTRICIONISTA CLÍNICO',
    title: 'Fernanda Souza',
    description: 'Olá! Sou Fernanda, nutricionista dedicada ao bem-estar e à qualidade de vida dos meus pacientes.',
    button: {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/nutri-fernanda-pinheiros/',
    },
    link: {
      label: 'Sobre mim',
      href: '#about',
    },
    image: {
      src: '/assets/images/header.jpg',
      alt: 'Fernanda Souza'
    },
  },
  about: {
    title: 'Sobre Mim',
    description: 'Olá! Sou Fernanda, nutricionista dedicada ao bem-estar e à qualidade de vida dos meus pacientes.',
    paragraph: [
      'Durante minha formação, participei intensamente de projetos, feiras e pesquisas, buscando aprofundar-me em diversas áreas da nutrição.',
      'Atualmente, atuo na área clínica, com foco em nutrição materno-infantil, onde me realizo ao apoiar a saúde de mães e crianças.'
    ],
    images: [
      '/assets/images/abt02.png',
      '/assets/images/abt03.png',
      '/assets/images/abt04.png',
      '/assets/images/fernanda.jpeg'
    ],
  },
  curriculum: {
    title: 'Formação Acadêmica',
    description: 'Minha formação acadêmica é uma parte essencial da minha jornada profissional.',
    image: {
      src: '/assets/images/curriculum_croped_fix.png',
      alt: 'Currículo',
    },
    items: [
      {
        institution: 'Centro Universitário FMU | FIAM-FAAM',
        course: 'Nutrição',
        period: 'Janeiro 2020 - junho 2024',
        description: 'O curso forma profissionais capacitados para promoverem a saúde através da alimentação. Durante a graduação, aprenderão a consultar, diagnosticar, tratar e acompanhar o estado nutricional dos pacientes.',
      },
      {
        institution: 'FAMEF - FACULDADE METROPOLITANA DE FRANCA',
        course: 'Nutrição Clínica',
        period: 'Dezembro 2024 - atualmente.',
        description: 'Este curso aborda diversas patologias nutricionais, incluindo dietoterapia para doenças digestivas e terapias nutricionais. Os estudos também cobriram nutrientes calóricos, balanço energético e nutrição em diferentes estágios da vida. O curso ofereceu uma visão abrangente sobre nutrição.',
      },
      {
        institution: 'NUTRIÇÃO APLICADA',
        course: 'Da fertilidade a introdução alimentar',
        period: 'Março 2025 - atualmente.',
        description: 'Quando se trata da paciente gestante, é necessário acompanhar as alterações e necessidades fisiológicas e nutricionais a cada mês. Portanto, os cálculos nutricionais, a correção de sintomas como azia e má digestão, assim como a presença do diabetes gestacional devem ser tratados com cautela e precisão.',
      },
    ],
  },
  footer: `${new Date().getFullYear()} Nutricionista Fernanda Souza. - Todos os Direitos Reservados.`
};
