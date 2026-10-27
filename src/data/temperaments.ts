import { TemperamentId, TemperamentInfo } from '../types';

export const TEMPERAMENTS: Record<TemperamentId, TemperamentInfo> = {
  SP: {
    id: 'SP',
    name: 'Artesãos',
    title: 'Os Mestres da Ação e Tática Sensorial',
    motto: 'Viver o presente com liberdade, maestria prática e intensidade.',
    coreNature: 'Sensorial e Perceptivo (Sensing - Perceiving)',
    description:
      'Os Artesãos são pessoas práticas, dinâmicas e focadas na realidade imediata. Valorizam a liberdade pessoal, a espontaneidade e a habilidade de responder com rapidez a desafios reais. São exímios solucionadores de crises no calor do momento, dotados de inteligência tática, destreza física ou estética apurada.',
    coreDrive: 'Impacto imediato, autonomia de ação e experimentação prática.',
    keyStrengths: [
      'Capacidade ímpar de adaptação e improvisação em momentos críticos',
      'Foco aguçado na realidade tangível e nos fatos imediatos',
      'Desinibição e ousadia para experimentar soluções inovadoras',
      'Energia contagiante e presença vibrante no ambiente',
      'Senso estético e destreza para manusear ferramentas, pessoas ou recursos',
    ],
    growthAreas: [
      'Tendência a negligenciar consequências de longo prazo ou planos abstratos',
      'Impaciência com burocracias, teorias densas e rotinas repetitivas',
      'Risco de abandonar projetos quando o entusiasmo inicial diminui',
      'Dificuldade em lidar com normas rígidas que limitam sua liberdade',
    ],
    roles: [
      {
        code: 'ESTP',
        titlePt: 'O Promotor',
        titleEn: 'The Promoter',
        summary:
          'Persuasivo, energético e movido pela ação. O ESTP adora negociar, mobilizar pessoas e resolver impasses imediatos com desenvoltura incomparável.',
        communication:
          'Direta, enérgica e bem-humorada. Prefere conversas práticas, objetivas e recheadas de exemplos reais.',
        workStyle:
          'Focado em resultados rápidos, ambientes de ritmo acelerado e negociações com dinamismo.',
        decisionMaking:
          'Pragmática e rápida, baseada no que gera o melhor retorno prático agora.',
        recommendedCareers: [
          'Empreendedorismo',
          'Negociação e Vendas Corporativas',
          'Gestão de Crises e Operações',
          'Corretagem Imobiliária / Financeira',
          'Atleta Profissional / Treinador',
        ],
      },
      {
        code: 'ISTP',
        titlePt: 'O Operador / Artesão Técnico',
        titleEn: 'The Crafter',
        summary:
          'Observador silencioso, calmo sob pressão e mestre de sistemas práticos. Compreende como as coisas funcionam por dentro com facilidade instintiva.',
        communication:
          'Econômica, precisa e factual. Fala quando tem algo relevante e prático a acrescentar.',
        workStyle:
          'Autônomo, focado em resolver panes e aprimorar ferramentas com máxima eficiência mecânica ou computacional.',
        decisionMaking:
          'Estritamente lógica, fria e baseada no funcionamento mecânico dos fatos.',
        recommendedCareers: [
          'Engenharia Mecânica / Mecatrônica',
          'Desenvolvimento de Software / DevOps',
          'Aviação / Pilotagem',
          'Cirurgia / Atendimento de Emergência',
          'Análise Forense e Investigação Técnica',
        ],
      },
      {
        code: 'ESFP',
        titlePt: 'O Animador',
        titleEn: 'The Performer',
        summary:
          'Caloroso, generoso e vivaz. O ESFP ilumina qualquer ambiente e envolve as pessoas em experiências prazerosas, com empatia sincera e espírito lúdico.',
        communication:
          'Entusiasmada, acolhedora e expressiva. Conecta-se imediatamente através do afeto e da alegria.',
        workStyle:
          'Colaborativo, espontâneo e voltado ao contato humano vibrante, evitando monotonia.',
        decisionMaking:
          'Guiada por como as decisões afetarão a atmosfera emocional e a satisfação imediata.',
        recommendedCareers: [
          'Artes Cênicas e Entretenimento',
          'Relações Públicas e Eventos',
          'Hotelaria e Hospitalidade de Luxo',
          'Educação Infantil e Recreação',
          'Design de Moda e Beleza',
        ],
      },
      {
        code: 'ISFP',
        titlePt: 'O Compositor / Criador Sensível',
        titleEn: 'The Composer',
        summary:
          'Sensível, harmonioso e autêntico. O ISFP expressa seus sentimentos mais profundos por meio da criação artística, gestos de carinho silenciosos e sintonia com a natureza.',
        communication:
          'Gentil, reservada e acolhedora. Prefere ouvir com atenção a impor opiniões.',
        workStyle:
          'Trabalho com espaço pessoal, ritmo próprio e alinhamento total com seus valores éticos e estéticos.',
        decisionMaking:
          'Intuitivo-emocional, priorizando harmonia, integridade pessoal e empatia.',
        recommendedCareers: [
          'Design Gráfico / Artes Visuais',
          'Gastronomia Autoral',
          'Medicina Veterinária e Cuidado Animal',
          'Fotografia e Produção Audiovisual',
          'Fisioterapia e Terapias Integrativas',
        ],
      },
    ],
  },
  SJ: {
    id: 'SJ',
    name: 'Guardiões',
    title: 'Os Pilares da Estabilidade, Dever e Organização',
    motto: 'Zelar pelas instituições, honrar compromissos e garantir a ordem.',
    coreNature: 'Sensorial e Julgador (Sensing - Judging)',
    description:
      'Os Guardiões são os alicerces da sociedade organizada. Valorizam a responsabilidade, a lealdade, as tradições consolidadas e o cumprimento fiel do dever. Dotados de inteligência logística, certificam-se de que planos sejam executados dentro do prazo, que os recursos não faltem e que a comunidade permaneça segura e próspera.',
    coreDrive: 'Segurança, dever cumprido, estabilidade e pertencimento institucional.',
    keyStrengths: [
      'Excepcional senso de confiabilidade, disciplina e pontualidade',
      'Habilidade natural para organizar rotinas, finanças e processos com rigor',
      'Lealdade inabalável a suas equipes, famílias e instituições',
      'Prudência na gestão de riscos e conservação de recursos valiosos',
      'Paciência e tenacidade para lidar com tarefas detalhadas essenciais',
    ],
    growthAreas: [
      'Resistência a mudanças repentinas e relutância em abandonar métodos antigos',
      'Risco de sobrecarga ao assumir responsabilidades excessivas por todos',
      'Tendência ao perfeccionismo severo e julgamento crítico sobre regras',
      'Dificuldade para relaxar enquanto houver alguma pendência no horizonte',
    ],
    roles: [
      {
        code: 'ESTJ',
        titlePt: 'O Supervisor',
        titleEn: 'The Supervisor',
        summary:
          'Líder resoluto, sistemático e direto. O ESTJ assume o comando naturalmente para estabelecer diretrizes claras, coordenar equipes e garantir resultados impecáveis.',
        communication:
          'Direta, estruturada e assertiva. Não deixa margem para ambiguidades e preza a franqueza.',
        workStyle:
          'Metódico, orientado a processos padronizados, metas claras e hierarquia funcional respeitada.',
        decisionMaking:
          'Racional, baseada em políticas consolidadas, dados objetivos e precedentes testados.',
        recommendedCareers: [
          'Gestão de Operações e Direção Geral',
          'Direito e Magistratura',
          'Finanças Corporativas e Controladoria',
          'Gestão Pública e Militar',
          'Engenharia Civil e Gestão de Obras',
        ],
      },
      {
        code: 'ISTJ',
        titlePt: 'O Inspetor',
        titleEn: 'The Inspector',
        summary:
          'Guardião da integridade, meticuloso e infalível no cumprimento da palavra. O ISTJ valoriza a precisão factual, o dever moral e a consistência sólida ao longo dos anos.',
        communication:
          'Factual, contida e sóbria. Fala apenas o necessário com exatidão comprovada.',
        workStyle:
          'Minucioso, hiperconcentrado, focado em cumprir regras sem desvios ou atalhos.',
        decisionMaking:
          'Estritamente lógica, pautada em histórico comprovado, regulamentos e evidências documentais.',
        recommendedCareers: [
          'Auditoria, Contabilidade e Compliance',
          'Análise de Risco e Segurança da Informação',
          'Administração de Bancos de Dados',
          'Perícia Criminal e Investigação',
          'Arquivologia e Gestão Patrimonial',
        ],
      },
      {
        code: 'ESFJ',
        titlePt: 'O Provedor',
        titleEn: 'The Provider',
        summary:
          'Caloroso, generoso e guardião da harmonia social. O ESFJ dedica-se incansavelmente a criar ambientes acolhedores, celebrar tradições e assegurar que todos se sintam amparados.',
        communication:
          'Afetuosa, encorajadora e inclusiva. Presta atenção minuciosa aos sentimentos e necessidades do grupo.',
        workStyle:
          'Colaborativo, estruturado, focado no espírito de equipe e no bem-estar comunitário.',
        decisionMaking:
          'Baseada na harmonia social, na cooperação e no impacto que trará para a vida das pessoas.',
        recommendedCareers: [
          'Gestão de Recursos Humanos e Cultura',
          'Enfermagem e Cuidados de Saúde',
          'Pedagogia e Gestão Escolar',
          'Assistência Social e ONGs Comunitárias',
          'Assessoria de Comunicação e Eventos',
        ],
      },
      {
        code: 'ISFJ',
        titlePt: 'O Protetor',
        titleEn: 'The Protector',
        summary:
          'Leal, paciente e profundamente zeloso. O ISFJ trabalha nos bastidores com devoção altruísta, lembrando-se de detalhes que a maioria esquece para proteger quem ama.',
        communication:
          'Suave, atenciosa e discreta. Expressa cuidado genuíno mais por atos de serviço do que por discursos.',
        workStyle:
          'Constante, confiável, focado na excelência do serviço e no apoio incondicional aos colegas.',
        decisionMaking:
          'Ponderada, guiada por valores de benevolência, respeito à história e segurança das pessoas.',
        recommendedCareers: [
          'Medicina da Família / Enfermagem',
          'Biblioteconomia e Conservação Histórica',
          'Educação Especial / Psicopedagogia',
          'Atendimento Humanizado ao Cliente',
          'Secretariado Executivo e Suporte Institucional',
        ],
      },
    ],
  },
  NF: {
    id: 'NF',
    name: 'Idealistas',
    title: 'Os Catalisadores da Conexão e do Potencial Humano',
    motto: 'Buscar autenticidade, inspirar a evolução do espírito e conectar almas.',
    coreNature: 'Intuitivo e Sentimental (Intuitive - Feeling)',
    description:
      'Os Idealistas são impulsionados por um profundo anseio de significado pessoal, integridade moral e desenvolvimento do potencial humano. Dotados de inteligência diplomática e empatia quase telepática, buscam enxergar além das aparências, promovendo concórdia, propósito e transformação positiva na vida das pessoas.',
    coreDrive: 'Autenticidade existencial, empatia profunda e autorrealização humana.',
    keyStrengths: [
      'Empatia refinada para compreender motivações ocultas e dores alheias',
      'Habilidade inspiradora de articular visões de futuro que tocam o coração',
      'Compromisso inabalável com a verdade interior e valores éticos elevados',
      'Criatividade para encontrar soluções pacíficas e construir pontes humanas',
      'Capacidade de despertar o melhor nos outros através de encorajamento sincero',
    ],
    growthAreas: [
      'Sensibilidade extrema a conflitos e desarmonias interpessoais',
      'Idealismo excessivo que pode gerar desilusão com as imperfeições da realidade',
      'Dificuldade para dizer "não" e tendência a absorver o sofrimento dos outros',
      'Resistência a análises friamente quantitativas que desconsideram o fator humano',
    ],
    roles: [
      {
        code: 'ENFJ',
        titlePt: 'O Professor',
        titleEn: 'The Teacher',
        summary:
          'Carismático, visionário e profundamente magnético. O ENFJ lidera pelo exemplo ético, inspirando indivíduos e grupos a superarem suas limitações rumo a um bem maior.',
        communication:
          'Inspiradora, calorosa e eloquente. Consegue sintonizar perfeitamente com a plateia e mobilizar vontades.',
        workStyle:
          'Voltado à mentoria de pessoas, facilitação de dinâmicas e construção de culturas organizacionais nobres.',
        decisionMaking:
          'Centrada nas pessoas, ponderando como cada rumo pode potencializar o florescimento de todos.',
        recommendedCareers: [
          'Liderança Organizacional e Coaching Executivo',
          'Educação Universitária e Formação Docente',
          'Diplomacia e Relações Internacionais',
          'Comunicação Social e Jornalismo Humanitário',
          'Psicologia Clínica e Psicoterapia',
        ],
      },
      {
        code: 'INFJ',
        titlePt: 'O Conselheiro',
        titleEn: 'The Counselor',
        summary:
          'Misterioso, profundo e possuidor de intuição profética. O INFJ alia uma sensibilidade cósmica a uma férrea determinação para transformar visões ideais em legado duradouro.',
        communication:
          'Profunda, metafórica e reflexiva. Prefere diálogos substanciais um-a-um a conversas superficiais.',
        workStyle:
          'Autônomo, focado em causas de longo prazo, com ambientes calmos propícios à reflexão profunda.',
        decisionMaking:
          'Holística e intuitiva, guiada por visões internas de coerência ética universal.',
        recommendedCareers: [
          'Psicologia e Psicanálise',
          'Escrita Autoral e Filosofia',
          'Consultoria de Carreira e Orientação Espiritual',
          'Direção Criativa e Arquitetura Conceitual',
          'Defensoria Pública e Direitos Humanos',
        ],
      },
      {
        code: 'ENFP',
        titlePt: 'O Campeão',
        titleEn: 'The Champion',
        summary:
          'Espontâneo, radiante e incansável caçador de possibilidades. O ENFP enxerga conexões invisíveis em tudo e contagia o mundo com seu otimismo e paixão criativa.',
        communication:
          'Vibrante, expressiva e repleta de metáforas inovadoras. Conecta ideias inusitadas com facilidade.',
        workStyle:
          'Colaborativo, dinâmico e livre de burocracias, transitando entre múltiplos projetos empolgantes.',
        decisionMaking:
          'Aberta e exploratória, orientada para oportunidades inovadoras que ressoem com seus princípios.',
        recommendedCareers: [
          'Inovação, Design Thinking e Futurismo',
          'Publicidade, Branding e Storytelling',
          'Jornalismo Investigativo e Produção de Conteúdo',
          'Facilitação de Workshops e Treinamentos',
          'Empreendedorismo Social',
        ],
      },
      {
        code: 'INFP',
        titlePt: 'O Curador / Mediador',
        titleEn: 'The Healer',
        summary:
          'Poeta da alma, reservado e de integridade imaculada. O INFP navega por um universo interior rico e delicado, buscando viver em perfeita harmonia com sua bússola moral.',
        communication:
          'Gentil, compassiva e sincera. Prefere expressar seus pensamentos mais profundos pela escrita.',
        workStyle:
          'Independente, flexível e focado em trabalhos que tenham um propósito autêntico e significativo.',
        decisionMaking:
          'Guiada estritamente pela fidelidade aos próprios sentimentos e valores mais sagrados.',
        recommendedCareers: [
          'Literatura, Tradução e Poesia',
          'Psicoterapia e Terapia Artística',
          'Antropologia e Pesquisa Cultural',
          'Composição Musical e Design Editorial',
          'Ativismo Ambiental e Defesa da Natureza',
        ],
      },
    ],
  },
  NT: {
    id: 'NT',
    name: 'Racionais',
    title: 'Os Estrategistas da Competência, Sistemas e Lógica',
    motto: 'Compreender os princípios universais, projetar sistemas elegantes e dominar a complexidade.',
    coreNature: 'Intuitivo e Pensador (Intuitive - Thinking)',
    description:
      'Os Racionais são apaixonados pelo saber, pela competência técnica e pelo raciocínio estratégico. Buscam compreender as leis subjacentes que governam o universo e a sociedade, recusando verdades prontas e autoridades cegas. Dotados de inteligência estratégica, formulam teorias sofisticadas, arquitetam sistemas robustos e resolvem enigmas complexos com elegância intelectual.',
    coreDrive: 'Competência máxima, inovação lógica e domínio de sistemas complexos.',
    keyStrengths: [
      'Visão estratégica de longo alcance e antecipação de cenários futuros',
      'Raciocínio lógico cirúrgico, livre de vieses emocionais ou dogmas',
      'Curiosidade insaciável para desvendar causas fundamentais e princípios primeiros',
      'Capacidade de simplificar e reorganizar estruturas complexas com eficácia',
      'Busca contínua por excelência e autoaperfeiçoamento constante',
    ],
    growthAreas: [
      'Impaciência com ineficiências ou com o tempo de aprendizado alheio',
      'Tendência a parecer frio, cético ou excessivamente crítico em situações afetivas',
      'Paralisia por análise ao tentar encontrar a teoria absoluta antes de agir',
      'Risco de negligenciar a importância dos rituais sociais e do tato emocional',
    ],
    roles: [
      {
        code: 'ENTJ',
        titlePt: 'O Marechal / Comandante',
        titleEn: 'The Fieldmarshal',
        summary:
          'Estrategista audaz, líder nato e arquiteto de impérios institucionais. O ENTJ mobiliza recursos e lidera transformações sistêmicas com determinação inabalável.',
        communication:
          'Assertiva, focada em visão estratégica e desafiadora. Valoriza clareza lógica e brevidade.',
        workStyle:
          'Alto comando, definição de estratégias globais e eliminação impiedosa de gargalos e ineficiências.',
        decisionMaking:
          'Estratégica e resoluta, orientada para a máxima eficácia e objetivos de longo prazo.',
        recommendedCareers: [
          'Presidência Corporativa (CEO / COO)',
          'Consultoria de Estratégia Empresarial',
          'Venture Capital e Fusões e Aquisições',
          'Engenharia de Sistemas Complexos',
          'Liderança Política e Econômica',
        ],
      },
      {
        code: 'INTJ',
        titlePt: 'O Mentor / Arquiteto Estratégico',
        titleEn: 'The Mastermind',
        summary:
          'Independente, meticuloso e dono de uma visão conceitual afiada. O INTJ antecipa jogadas com anos de antecedência, desenhando planos estratégicos infalíveis.',
        communication:
          'Precisa, lógica e desprovida de rodeios. Aprecia debates conceituais de alto nível.',
        workStyle:
          'Hiperfocado, solitário quando necessário, dedicando-se a projetar modelos teóricos e soluções inovadoras.',
        decisionMaking:
          'Totalmente fundamentada em lógica dedutiva, cenários prospectivos e princípios sólidos.',
        recommendedCareers: [
          'Arquitetura de Software e Inteligência Artificial',
          'Pesquisa Científica e Física Teórica',
          'Estratégia Militar ou Empresarial de Longo Prazo',
          'Economia e Modelagem Financeira Quantitativa',
          'Gestão de Inovação e P&D',
        ],
      },
      {
        code: 'ENTP',
        titlePt: 'O Inventor',
        titleEn: 'The Inventor',
        summary:
          'Curioso, irreverente e brilhantemente inventivo. O ENTP vive para desafiar ideias vigentes, quebrar paradigmas e criar invenções disruptivas que mudam o jogo.',
        communication:
          'Ágil, provocativa e dialética. Adora um debate intelectual estimulante e o choque saudável de ideias.',
        workStyle:
          'Dinâmico, explorador de protótipos e novas fronteiras, delegando rotinas repetitivas.',
        decisionMaking:
          'Experimental e conceitual, avaliando o potencial revolucionário e a novidade de cada opção.',
        recommendedCareers: [
          'Inovação Tecnológica e Startups',
          'Direito Contencioso e Arbitragem Estratégica',
          'Pesquisa de Produtos Disruptivos',
          'Jornalismo Crítico e Ensaios Filosóficos',
          'Consultoria em Modelos de Negócios',
        ],
      },
      {
        code: 'INTP',
        titlePt: 'O Arquiteto Lógico / Pensador',
        titleEn: 'The Architect',
        summary:
          'Teórico genial, filósofo natural e buscador incansável da coerência universal. O INTP desmonta conceitos até os átomos para reconstruí-los com perfeição lógica.',
        communication:
          'Criteriosa, analítica e cheia de refinamentos terminológicos. Preza a exatidão conceitual.',
        workStyle:
          'Profundamente autônomo, debruçado sobre problemas difíceis que exigem pensamento original profundo.',
        decisionMaking:
          'Puramente analítica e desapaixonada, pautada na elegância lógica e na eliminação de contradições.',
        recommendedCareers: [
          'Ciência da Computação e Algoritmos Avançados',
          'Matemática Pura e Lógica Simbólica',
          'Astrofísica e Cosmologia',
          'Filosofia da Ciência e Epistemologia',
          'Pesquisa Biomolecular e Genômica',
        ],
      },
    ],
  },
};

export const ROLE_LOOKUP: Record<
  string,
  {
    temperamentId: TemperamentId;
    temperamentName: string;
    rolePt: string;
    roleEn: string;
    summary: string;
  }
> = {
  ESTP: {
    temperamentId: 'SP',
    temperamentName: 'Artesão',
    rolePt: 'O Promotor',
    roleEn: 'The Promoter',
    summary: 'Orientado para a ação e negociação rápida no mundo real.',
  },
  ISTP: {
    temperamentId: 'SP',
    temperamentName: 'Artesão',
    rolePt: 'O Operador / Artesão Técnico',
    roleEn: 'The Crafter',
    summary: 'Mestre da mecânica e resolução prática e calma de problemas.',
  },
  ESFP: {
    temperamentId: 'SP',
    temperamentName: 'Artesão',
    rolePt: 'O Animador',
    roleEn: 'The Performer',
    summary: 'Entusiasta espontâneo, radiante e focado na conexão viva e presente.',
  },
  ISFP: {
    temperamentId: 'SP',
    temperamentName: 'Artesão',
    rolePt: 'O Compositor',
    roleEn: 'The Composer',
    summary: 'Criador sensível, harmonioso e fiel a seus princípios e estética.',
  },
  ESTJ: {
    temperamentId: 'SJ',
    temperamentName: 'Guardião',
    rolePt: 'O Supervisor',
    roleEn: 'The Supervisor',
    summary: 'Líder metódico, guardião de prazos, ordem e eficiência comprovada.',
  },
  ISTJ: {
    temperamentId: 'SJ',
    temperamentName: 'Guardião',
    rolePt: 'O Inspetor',
    roleEn: 'The Inspector',
    summary: 'Fiel ao dever, factual, rigoroso e confiável em cada detalhe.',
  },
  ESFJ: {
    temperamentId: 'SJ',
    temperamentName: 'Guardião',
    rolePt: 'O Provedor',
    roleEn: 'The Provider',
    summary: 'Provedor dedicado da harmonia, hospitalidade e coesão comunitária.',
  },
  ISFJ: {
    temperamentId: 'SJ',
    temperamentName: 'Guardião',
    rolePt: 'O Protetor',
    roleEn: 'The Protector',
    summary: 'Protetor leal e atencioso, que zela silenciosamente por todos.',
  },
  ENFJ: {
    temperamentId: 'NF',
    temperamentName: 'Idealista',
    rolePt: 'O Professor',
    roleEn: 'The Teacher',
    summary: 'Líder transformador, empático e catalisador de vidas e causas.',
  },
  INFJ: {
    temperamentId: 'NF',
    temperamentName: 'Idealista',
    rolePt: 'O Conselheiro',
    roleEn: 'The Counselor',
    summary: 'Visionário compassivo, perspicaz e arquiteto de futuros nobres.',
  },
  ENFP: {
    temperamentId: 'NF',
    temperamentName: 'Idealista',
    rolePt: 'O Campeão',
    roleEn: 'The Champion',
    summary: 'Entusiasta criativo, cativante e apaixonado por novas possibilidades.',
  },
  INFP: {
    temperamentId: 'NF',
    temperamentName: 'Idealista',
    rolePt: 'O Curador / Mediador',
    roleEn: 'The Healer',
    summary: 'Idealista autêntico, poético e guiado por princípios profundos.',
  },
  ENTJ: {
    temperamentId: 'NT',
    temperamentName: 'Racional',
    rolePt: 'O Marechal / Comandante',
    roleEn: 'The Fieldmarshal',
    summary: 'Estrategista determinado, arquiteto de metas e resultados grandiosos.',
  },
  INTJ: {
    temperamentId: 'NT',
    temperamentName: 'Racional',
    rolePt: 'O Mentor / Arquiteto Estratégico',
    roleEn: 'The Mastermind',
    summary: 'Estrategista analítico, independente e mestre da visão prospectiva.',
  },
  ENTP: {
    temperamentId: 'NT',
    temperamentName: 'Racional',
    rolePt: 'O Inventor',
    roleEn: 'The Inventor',
    summary: 'Inovador brilhante, desafiador de convenções e gerador de ideias.',
  },
  INTP: {
    temperamentId: 'NT',
    temperamentName: 'Racional',
    rolePt: 'O Arquiteto Lógico',
    roleEn: 'The Architect',
    summary: 'Pensador rigoroso, criador de modelos conceituais elegantes.',
  },
};
