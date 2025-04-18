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
  work: {
    title: 'Experiência Profissional',
    quote: '“A saúde não está na magreza nem em dietas malucas. Está na boa nutrição e na rica alimentação… Saúde é sinônimo de felicidade, e não de sofrimento.”',
    author: 'Fernanda Souza',
    description: 'Minha experiência profissional é uma parte importante da minha jornada.',
    image: {
      src: '/assets/images/header.jpg',
      alt: 'Experiência Profissional',
    },
    experiences: [
      {
        company: 'HUMANA MAGNA - UNIDADE IBIRAPUERA - ESTÁGIO EM NUTRIÇÃO CLÍNICA',
        position: '',
        period: 'Fevereiro 2025 - atualmente | São Paulo',
        obrigations: [
          {
            title: 'Atendimento nutricional:',
            description: 'Monitorar a evolução nutricional dos pacientes, ajustando as dietas conforme necessário.',
          },
          {
            title: 'Educação Nutricional:',
            description: 'Oferecer orientações nutricionais verbais e escritas para pacientes e familiares.',
          },
          {
            title: 'Acompanhamento de Pacientes:',
            description: 'Realizar visitas regulares aos pacientes internados para avaliar sua evolução clínica e nutricional.',
          },
        ],
      },
      {
        company: 'SODEXO UNIDADE TITAN - ESTÁGIO EM UNIDADE DE ALIMENTAÇÃO E NUTRIÇÃO',
        position: '',
        period: 'Setembro 2024 - outubro 2024 | São Paulo',
        obrigations: [
          {
            title: 'Acompanhamento Nutricional:',
            description: 'Avaliar o estado nutricional dos pacientes, coletar dados sobre hábitos alimentares e histórico médico, e fornecer orientações básicas sobre alimentação saudável.',
          },
          {
            title: 'Planejamento de Cardápios:',
            description: 'Auxiliar na elaboração de cardápios gerais e especiais, considerando restrições alimentares e necessidades nutricionais dos pacientes.',
          },
          {
            title: 'Supervisão da Produção Alimentar:',
            description: 'Garantir que as boas práticas de manipulação de alimentos sejam seguidas, desde o armazenamento até o preparo das refeições.',
          },
          {
            title: 'Controle de Qualidade:',
            description: 'Monitorar a qualidade dos alimentos servidos, verificando a procedência dos ingredientes e a higienização correta do local.',
          },
          {
            title: 'Gestão de Estoque:',
            description: 'Organizar o armazenamento adequado dos alimentos e monitorar o uso eficiente dos ingredientes.',
          },
        ],
      },
      {
        company: 'CIECS - CLÍNICAS INTEGRADAS DA ESCOLA DE CIÊNCIAS DA SAÚDE - ESTÁGIO EM NUTRIÇÃO COLETIVA',
        position: '',
        period: 'Outubro 2024 - dezembro 2024 | São Paulo',
        obrigations: [
          {
            title: 'Avaliação Nutricional:',
            description: 'Realizar avaliações antropométricas (peso, altura, circunferência da cintura) e classificar o estado nutricional dos usuários.',
          },
          {
            title: 'Orientação Nutricional:',
            description: 'Fornecer orientações nutricionais individuais e em grupo para pacientes e cuidadores.',
          },
          {
            title: 'Educação Nutricional:',
            description: 'Planejar e ministrar palestras educativas sobre alimentação saudável e prevenção de doenças para diferentes grupos.',
          },
          {
            title: 'Desenvolvimento de Materiais Educativos:',
            description: 'Criar materiais de educação nutricional, como folders e banners, para salas de espera.',
          },
        ],
      },
    ],
  },
  testimonials: {
    title: 'Depoimentos',
    description: 'Feedbacks positivos',
    highlight: {
      feedback: '“Uma profissional incrivel, cheia de instusiasmo e energia, sempre disposta a ajudar e a ensinar. Uma verdadeira inspiração para todos nós.”',
      author: 'Rogeria Silva',
      position: 'Técnica em Nutrição',
    },
    feedbacks: [
      {
        feedback: 'Ama seus paceintes e sempre busca o melhor para eles.',
        author: 'Marcia Alves',
        position: 'Copeira',
      },
      {
        author: 'Andriele',
        position: 'Farmaceutica',
        feedback: '“Uma gestora extremamente organizada e focada, sabe se comunicar muito bem com todos os colaboradores.”',
      },
      {
        author: 'Dra. Midori',
        position: 'Médica',
        feedback: 'Sabe lidar com os mais diversos tipos de pessoas, sempre com um sorriso no rosto e uma palavra de apoio.',
      },
      {
        author: 'Prof Camila',
        position: 'Professora de nutrição - FMU',
        feedback: 'Foi a melhor aluna que já tive, sempre disposta a aprender e a ajudar os outros.',
      },
    ],
  },
  tips: {
    title: 'Nutrição por amor',
    subtitle: 'Dicas para tornar sua vida melhor',
    description: 'Usando minhas redes sociais para promover a conscientização e a educação sobre a importância da nutrição no manejo de dislipidemia, sarcopenia e depressão, com foco em intervenções Nutricionais e hábitos alimentares',
    image: {
      src: '/assets/images/square.png',
      alt: 'Dicas',
    },
    link: {
      label: 'Visite meu instagram para saber mais',
      href: 'https://www.instagram.com/nutri_fernandasouza/profilecard/',
    },
  },
  footer: `${new Date().getFullYear()} Nutricionista Fernanda Souza. - Todos os Direitos Reservados.`
};
